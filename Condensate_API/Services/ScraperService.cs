using Condensate_API.Models;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using MongoDB.Driver;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;

namespace Condensate_API.Services
{
    public class ScraperService : IHostedService, IDisposable
    {
        private Timer _games_timer;
        private Timer _apps_timer;
        private readonly ILogger _logger;

        private readonly AppService _appService;
        private readonly GameService _gameService;

        private readonly HttpClient _client;
        private const string _URL_PARAMETERS = "appdetails/?filters=basic,type,price_overview,genres&appids=";



        public ScraperService(ILogger<ScraperService> logger, IHttpClientFactory clientFactory, GameService gameService, AppService appService)
        {
            _logger = logger;
            _appService = appService;
            _gameService = gameService;
            _client = clientFactory.CreateClient("steam-store");
        }

        public void Dispose()
        {
            _games_timer?.Dispose();
            _apps_timer?.Dispose();
            _client?.Dispose();
        }

        private void ScrapeApps(object state)
        {
            // start async update for all apps... takes a while.
            _ = _appService.UpdateAllApps();
        }

        private async void ScrapeGames(object state)
        {
            App app = _appService.GetLeastScrapedGame();
            if (app != null)
            {
                HttpResponseMessage response;
                try
                {
                    response = await _client.GetAsync(_URL_PARAMETERS + app.appid);
                }
                catch (Exception e)
                {
                    _logger.LogError(e, "Something went wrong while scraping games from steam!");
                    return;
                }

                Game g = new Game();
                if (response.IsSuccessStatusCode)
                {
                    JToken json = JToken.Parse(await response.Content.ReadAsStringAsync())[$"{app.appid}"];


                    if ((bool)json["success"] && ((string)json["data"]["type"]).Equals("game"))
                    {
                        g.appid = app.appid;
                        g.store_link = Game.STORE_GAME_LINK_PREFIX + app.appid;
                        g.name = (string)json["data"]["name"];
                        g.header_image = (string)json["data"]["header_image"];

                        // if game is free, then json["data"]["price_overview"] = null 
                        g.price = (json["data"]["price_overview"] == null ? 0.0 : (double)json["data"]["price_overview"]["initial"]) / 100.0;
                        g.genres = new HashSet<string>();

                        if (json["data"]["genres"] != null)
                        {
                            foreach (JObject content in json["data"]["genres"].Children<JObject>())
                            {
                                g.genres.Add((string)content["description"]);
                            }
                        }

                        _gameService.Update(g);
                    }
                    else if ((bool)json["success"])
                    {
                        // if the app isn't a game, then set its type so we don't scrape it again
                        app.type = (string)json["data"]["type"];
                    }

                    // inc the scrape count to make sure we don't scrape this too often
                    app.scrape_count++;
                    _appService.Update(app);
                }
            }

        }


        public Task StartAsync(CancellationToken cancellationToken)
        {
            _logger.LogInformation("Steam Scraper Service is starting.");
            _games_timer?.Dispose();
            _apps_timer?.Dispose();

            // set interval period to 2 seconds so steam doesn't ban me. 
            // can call steam api at most 200 times per 5 minutes
            // can be 1.5 seconds but don't want to risk it.

            // scrape a game every 5 seconds
            _games_timer = new Timer(ScrapeGames, null, TimeSpan.Zero, TimeSpan.FromSeconds(5));
            // scrape apps every 3 hours with a 5 minute startup delay
            _apps_timer = new Timer(ScrapeApps, null, TimeSpan.FromMinutes(5), TimeSpan.FromHours(3));

            return Task.CompletedTask;
        }

        public Task StopAsync(CancellationToken cancellationToken)
        {
            _logger.LogInformation("Steam Scraper Service is stopping.");
            _games_timer?.Change(Timeout.Infinite, 0);
            _apps_timer?.Change(Timeout.Infinite, 0);
            return Task.CompletedTask;
        }
    }
}
