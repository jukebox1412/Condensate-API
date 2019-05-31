using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Condensate_API.Models;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;

namespace Condensate_API.Services
{
    public class GameService
    {
        private readonly IMongoCollection<Game> _games;
        public GameService(IConfiguration config, MongoClientService mongoClientService)
        {
            _games = mongoClientService.database.GetCollection<Game>("Games");
        }

        public List<Game> Get()
        {
            return _games.Find(game => true).ToList();
        }

        public Game Get(string id)
        {
            return _games.Find<Game>(game => game.Id == id).FirstOrDefault();
        }
        public Game Get(uint appid)
        {
            return _games.Find<Game>(game => game.appid == appid).FirstOrDefault();
        }

        public Game Create(Game game)
        {
            _games.InsertOne(game);
            return game;
        }

        public void Update(Game gameIn)
        {
            Game found = _games.Find<Game>(game => game.appid == gameIn.appid).FirstOrDefault();
            if (found != null)
            {
                gameIn.Id = found.Id;
                _games.ReplaceOne(game => game.appid == gameIn.appid, gameIn);
            }
            else
            {
                Create(gameIn);
            }
        }

        public void Update(string id, Game gameIn)
        {
            _games.ReplaceOne(game => game.Id == id, gameIn);
        }

        public void Remove(Game gameIn)
        {
            _games.DeleteOne(game => game.Id == gameIn.Id);
        }

        public void Remove(string id)
        {
            _games.DeleteOne(game => game.Id == id);
        }
    }
}
