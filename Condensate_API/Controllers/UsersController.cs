using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Condensate_API.Models;
using SteamKit2;
using MongoDB.Driver;
using Condensate_API.Services;
using System.Net.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System.Text;
using Newtonsoft.Json.Linq;

namespace Condensate_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly GameService _gameService;
        private readonly ILogger _logger;
        private readonly HttpClient _clientStore;
        

        public UsersController(GameService gameService, IHttpClientFactory clientFactory, ILogger<UsersController> logger)
        {
            _gameService = gameService;
            _logger = logger;
            _clientStore = clientFactory.CreateClient("steam-store");
            

        }

        

        // GET: api/users
        [HttpGet]
        public async Task<ActionResult<Game>> Get()
        {
            var response = await _clientStore.GetAsync($"appdetails/?filters=basic,type,price_overview,genres&appids={57690}");

            Game g = new Game();
            if (response.IsSuccessStatusCode)
            {
                JToken json = JToken.Parse(await response.Content.ReadAsStringAsync())["57690"];

                if ((bool)json["success"])
                {
                    g.appid = 57690;
                    g.store_link = "https://store.steampowered.com/app/57690";
                    g.name = (string)json["data"]["name"];
                    g.header_image = (string)json["data"]["header_image"];
                    g.price = ((double)json["data"]["price_overview"]["initial"]) / 100.0;
                    g.genres = new HashSet<string>();

                    foreach (JObject content in json["data"]["genres"].Children<JObject>())
                    {
                        g.genres.Add((string)content["description"]);
                    }
                }
            }

            return g;
        }

        // GET: api/users/GetUserGamesById?id=5
        [HttpGet("GetUserGamesById")]
        public ActionResult<IEnumerable<Game>> GetUserGamesById(string id)
        {
            List<Game> games = new List<Game>();
            // in order to interact with the Web APIs, you must first acquire an interface
            // for a certain API
            using (dynamic steam = WebAPI.GetInterface("IPlayerService", Environment.GetEnvironmentVariable("STEAM_API_KEY")))
            {
                // note the usage of c#'s dynamic feature, which can be used
                // to make the api a breeze to use
                try
                {
                    var res = steam.GetOwnedGames(steamid: id);
                    foreach (KeyValue game in res["games"].Children)
                    {
                        Game g = new Game();
                        g.appid = game["appid"].AsUnsignedInteger();
                        g.name = _gameService.Get()[0].name;
                        //g.hours = game["playtime_forever"].AsLong();
                        games.Add(g);
                    }
                }
                catch (Exception e)
                {
                    _logger.LogError(e, "Failed to get owned games");
                }
            }

            return games;
        }
    }
}
