using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Condensate_API.Models;
using SteamKit2;
using Condensate_API.Services;
using System.Net.Http;
using Microsoft.Extensions.Logging;
using StackExchange.Profiling;

namespace Condensate_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly GameService _gameService;
        private readonly ILogger _logger;
        private readonly HttpClient _clientStore;
        private readonly GameCacheService _gameCacheService;


        public UsersController(GameService gameService, GameCacheService gameCacheService, IHttpClientFactory clientFactory, ILogger<UsersController> logger)
        {
            _gameService = gameService;
            _gameCacheService = gameCacheService;
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
            using (MiniProfiler.Current.Step("Get method with ID"))
            {
                HashSet<GamePlaytime> gamePlaytimes = new HashSet<GamePlaytime>();
                // in order to interact with the Web APIs, you must first acquire an interface
                // for a certain API
                using (MiniProfiler.Current.Step("Steamkit step"))
                {
                    using (dynamic steam = WebAPI.GetInterface("IPlayerService", Environment.GetEnvironmentVariable("STEAM_API_KEY")))
                    {
                        // note the usage of c#'s dynamic feature, which can be used
                        // to make the api a breeze to use
                        try
                        {
                            using (MiniProfiler.Current.Step("Getting owned games"))
                            {
                                var res = steam.GetOwnedGames(steamid: id);
                                using (MiniProfiler.Current.Step("Iterating over results"))
                                {
                                    // get hashset of known games to compare to 
                                    // for some reason, the get seems to take a long time
                                    HashSet<Game> games;
                                    using (MiniProfiler.Current.Step("Database read"))
                                    {
                                        games = new HashSet<Game>(_gameCacheService.Get(), new GameEqualityComparer());
                                    }
                                    foreach (KeyValue game in res["games"].Children)
                                    {
                                        uint appid = game["appid"].AsUnsignedInteger();
                                        Game g = new Game();
                                        g.name = "unknown";
                                        g.appid = appid;

                                        if (games.TryGetValue(g, out Game f))
                                        {
                                            gamePlaytimes.Add(new GamePlaytime(f, game["playtime_forever"].AsUnsignedInteger()));
                                        }
                                        else
                                        {
                                            gamePlaytimes.Add(new GamePlaytime(g, game["playtime_forever"].AsUnsignedInteger()));
                                        }
                                    }
                                }
                            }
                        }
                        catch (Exception e)
                        {
                            _logger.LogError(e, "Failed to get owned games");
                        }
                    }
                }
                return gamePlaytimes;
            }
        }
    }
}
