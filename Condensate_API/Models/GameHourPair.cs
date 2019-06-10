using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Condensate_API.Models
{
    public struct UserGPs
    {
        public User user;
        public HashSet<GamePlaytime> gamePlaytimes;
    }

    public struct GamePlaytime
    {
        public Game game;
        public double playtime;
        public GamePlaytime(Game game, double playtime)
        {
            this.game = game;
            this.playtime = playtime;
        }
    }
}
