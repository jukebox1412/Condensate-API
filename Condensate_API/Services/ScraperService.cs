using Condensate_API.Models;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using MongoDB.Driver;
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
        private Timer _timer;
        private readonly ILogger _logger;
        private readonly IMongoCollection<Game> _games;
        private readonly HttpClient _client;
        private const string _URL_PARAMETERS = "?filters=basic,type,price_overview,genres&appids=";

        public ScraperService(ILogger<ScraperService> logger, MongoClientService mongoClientService, IHttpClientFactory clientFactory)
        {
            _logger = logger;
            _games = mongoClientService.database.GetCollection<Game>("Games");
            _client= clientFactory.CreateClient("steam");
        }

        public void Dispose()
        {
            _timer?.Dispose();
            _client?.Dispose();
        }

        private async void ScrapeSteam(object state)
        {
            
            //HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Get, $"?filters=basic,price_overview,genres&appids={205633}");
            //var response = await _client.SendAsync(request);

        }

        private Game Create(Game game)
        {
            _games.InsertOne(game);
            return game;
        }

        private void Update(string id, Game gameIn)
        {
            _games.ReplaceOne(game => game.Id == id, gameIn);
        }

        public Task StartAsync(CancellationToken cancellationToken)
        {
            _logger.LogInformation("Steam Scraper Service is starting.");
            _timer?.Dispose();
            _timer = new Timer(ScrapeSteam, null, TimeSpan.Zero, TimeSpan.FromSeconds(2));
            return Task.CompletedTask;
        }

        public Task StopAsync(CancellationToken cancellationToken)
        {
            _logger.LogInformation("Steam Scraper Service is stopping.");
            _timer?.Change(Timeout.Infinite, 0);
            return Task.CompletedTask;
        }
    }
}
