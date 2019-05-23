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
        private readonly IHttpClientFactory _clientFactory;


        public ScraperService(ILogger<ScraperService> logger, MongoClientService mongoClientService, IHttpClientFactory clientFactory)
        {
            _logger = logger;
            _games = mongoClientService.database.GetCollection<Game>("Games");
            _clientFactory = clientFactory;
        }

        public void Dispose()
        {
            _timer?.Dispose();
        }

        private void ScrapeSteam(object state)
        {
            
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
            _timer = new Timer(ScrapeSteam, null, TimeSpan.Zero, TimeSpan.FromSeconds(4));
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
