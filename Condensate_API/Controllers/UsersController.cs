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

namespace Condensate_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly GameService _gameService;
        private readonly ILogger _logger;
        private readonly HttpClient _client;
        private const string _APP_DETAILS_URL = "https://store.steampowered.com/api/appdetails/?appids=";
        private HttpRequestMessage _request;
        public UsersController(GameService gameService, IHttpClientFactory clientFactory, ILogger<UsersController> logger)
        {
            _gameService = gameService;
            _logger = logger;
            _client = clientFactory.CreateClient();

            // save request so we can reuse it
            _request = new HttpRequestMessage();
            _request.Method = HttpMethod.Get;
            _request.Headers.Add("User-Agent", "Condensate/0.1");
            _request.Headers.Add("Accept", "application/json");
            _request.Headers.Add("Host", "store.steampowered.com");
            _request.Headers.Add("accept-encoding", "gzip, deflate");
            _request.Headers.Add("Connection", "keep-alive");
        }

        // GET: api/users
        [HttpGet]
        public async Task<ActionResult<User>> GetUser()
        {
            _request.RequestUri = new Uri(_APP_DETAILS_URL + "205633");
            var response = await _client.SendAsync(_request);
            return new User();
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
