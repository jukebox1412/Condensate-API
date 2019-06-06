using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Condensate_API.Models;
using SteamKit2;
using Condensate_API.Services;
using System.Net.Http;
using Microsoft.Extensions.Logging;
using System.Text.RegularExpressions;

namespace Condensate_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly GameService _gameService;
        private readonly ILogger _logger;
        private readonly GameCacheService _gameCacheService;




        public UsersController(GameService gameService, GameCacheService gameCacheService, IHttpClientFactory clientFactory, ILogger<UsersController> logger)
        {
            _gameService = gameService;
            _gameCacheService = gameCacheService;
            _logger = logger;
        }

        // GET: api/users
        //[HttpGet]
        //public ActionResult<IEnumerable<Game>> Get()
        //{
        //    return null;
        //}

        public static string GetSteamID(string input)
        {
            string digit_pattern = @"^\d+$";
            string user_homePattern = @"steamcommunity.com/id/([A-Za-z0-9\-]+)";
            string user_nestedPattern = @"steamcommunity.com/id/([A-Za-z0-9\-]+)/.*";
            string id_homePattern = @"steamcommunity.com/profiles/(\d+)";
            string id_nestedPattern = @"steamcommunity.com/profiles/(\d+)/.*";

            // see if the input is just the id
            Match digitMatch = Regex.Match(input.ToString().Replace("'", ""), digit_pattern);

            if (digitMatch.Success)
                return digitMatch.Value;

            Match id_homeMatch = Regex.Match(input, id_homePattern, RegexOptions.IgnoreCase);
            Match id_nestedMatch = Regex.Match(input, id_nestedPattern, RegexOptions.IgnoreCase);

            if (id_homeMatch.Success || id_nestedMatch.Success)
                return id_homeMatch.Success ? id_homeMatch.Groups[1].Value : id_nestedMatch.Groups[1].Value;

            Match user_homeMatch = Regex.Match(input, user_homePattern, RegexOptions.IgnoreCase);
            Match user_nestedMatch = Regex.Match(input, user_nestedPattern, RegexOptions.IgnoreCase);
            if (user_homeMatch.Success || user_nestedMatch.Success)
            {
                using (dynamic steam = WebAPI.GetInterface("ISteamUser", Environment.GetEnvironmentVariable("STEAM_API_KEY")))
                {
                    string user_name = user_homeMatch.Success ? user_homeMatch.Groups[1].Value : user_nestedMatch.Groups[1].Value;
                    var res = steam.ResolveVanityURL(vanityurl: user_name);
                    if (res["success"].AsUnsignedInteger() == 1)
                    {
                        return res["steamid"].AsString();
                    }
                }
            }

            return null;
        }

        // GET: api/users/GetUserGamesById?id=5
        [HttpGet("GetUserGamesById")]
        public ActionResult<IEnumerable<GamePlaytime>> GetUserGamesById(string id)
        {
            HashSet<GamePlaytime> gamePlaytimes = new HashSet<GamePlaytime>();
            using (dynamic steam = WebAPI.GetInterface("IPlayerService", Environment.GetEnvironmentVariable("STEAM_API_KEY")))
            {
                // note the usage of c#'s dynamic feature, which can be used
                // to make the api a breeze to use
                try
                {
                    KeyValue res = steam.GetOwnedGames(steamid: GetSteamID(id));

                    // check if we can get games; maybe profile is private or bad id
                    if (res.Children.Find(kv => kv.Name == "games") == null)
                        // same as returning null
                        return NoContent();
                    
                    // get hashset of known games to compare to 
                    HashSet<Game> games;
                    // use the cached games to save on time
                    games = new HashSet<Game>(_gameCacheService.Get(), new GameEqualityComparer());
                    foreach (KeyValue game in res["games"].Children)
                    {
                        uint appid = game["appid"].AsUnsignedInteger();
                        Game g = new Game();
                        g.name = "unknown";
                        g.appid = appid;
                        g.store_link = Game.STORE_GAME_LINK_PREFIX + appid;
                        g.header_image = Game.STEAM_LOGO_URL;

                        // since it's stored in minutes
                        double playtime = game["playtime_forever"].AsUnsignedInteger() / 60.0;

                        if (games.TryGetValue(g, out Game f))
                            gamePlaytimes.Add(new GamePlaytime(f, playtime));
                        else
                            gamePlaytimes.Add(new GamePlaytime(g, playtime));
                    }
                }
                catch (Exception e)
                {
                    _logger.LogError(e, "Failed to get owned games");
                    return NotFound();
                }
            }

            return gamePlaytimes;

        }
    }
}
