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
        public ActionResult<IEnumerable<Game>> Get()
        {
            return _gameService.Get();
        }

        // GET: api/users/GetUserGamesById?id=5
        [HttpGet("GetUserGamesById")]
        public ActionResult<IEnumerable<GamePlaytime>> GetUserGamesById(string id)
        {
            List<GamePlaytime> games = new List<GamePlaytime>();
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
                        uint appid = game["appid"].AsUnsignedInteger();
                        Game g = _gameService.Get(appid);

                        if (g == null)
                        {
                            g = new Game();
                            g.name = "unknown";
                            g.appid = appid;
                        }

                        games.Add(new GamePlaytime(g, game["playtime_forever"].AsLong()));
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
