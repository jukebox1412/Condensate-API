using Condensate_API.Models;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Condensate_API.Services
{
    /**
     * In Memory Cache wrapper class for GameService
     */
    public class GameCacheService : IHostedService, IDisposable
    {

        private HashSet<Game> _games_cache;

        private readonly GameService _gameService;
        private readonly ILogger<GameCacheService> _logger;
        private Timer _timer;

        private bool _fresh_data;


        public GameCacheService(ILogger<GameCacheService> logger, GameService gameService)
        {
            _logger = logger;
            _gameService = gameService;
        }

        private void ExpireData(object state)
        {
            _fresh_data = false;
        }

        private void RefreshData()
        {
            _games_cache.Clear();
            _games_cache.UnionWith(_gameService.Get());
            _fresh_data = true;
        }

        public List<Game> Get()
        {
            if (!_fresh_data)
                RefreshData();

            return _games_cache.ToList();
        }

        public Game Get(string id)
        {
            if (!_fresh_data)
                RefreshData();
            return _games_cache.FirstOrDefault(game => game.Id == id);
        }

        public Game Get(uint appid)
        {
            if (!_fresh_data)
                RefreshData();
            return _games_cache.FirstOrDefault(game => game.appid == appid);
        }

        public void Dispose()
        {
            _timer?.Dispose();
        }

        public Task StartAsync(CancellationToken cancellationToken)
        {
            _logger.LogInformation("Game Cache Service is starting.");
            _timer?.Dispose();

            _timer = new Timer(ExpireData, null, TimeSpan.Zero, TimeSpan.FromMinutes(5));

            _games_cache = new HashSet<Game>(_gameService.Get());
            _fresh_data = true;

            return Task.CompletedTask;
        }

        public Task StopAsync(CancellationToken cancellationToken)
        {
            _logger.LogInformation("Game Cache Service is stopping.");

            _timer?.Change(Timeout.Infinite, 0);
            return Task.CompletedTask;
        }
    }
}
