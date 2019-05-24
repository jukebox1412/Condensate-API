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
        private readonly HttpClient _client;
        public UsersController(GameService gameService, IHttpClientFactory clientFactory, ILogger<UsersController> logger)
        {
            _gameService = gameService;
            _logger = logger;
            _client = clientFactory.CreateClient("steam");
        }

        // GET: api/users
        [HttpGet]
        public async Task<ActionResult<Game>> Get()
        {
            var response = await _client.GetAsync($"?filters=basic,type,price_overview,genres&appids={205633}");

            Game g = new Game();
            if (response.IsSuccessStatusCode)
            {
                JToken json = JToken.Parse(await response.Content.ReadAsStringAsync());
                _logger.LogInformation("\n\n" + json["205633"]);
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
                        g.appid = game["appid"].AsLong();
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
