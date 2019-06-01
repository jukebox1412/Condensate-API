using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Condensate_API.Models
{
    public struct GamePlaytime
    {
        public Game game;
        public uint playtime;
        public GamePlaytime(Game game, uint playtime)
        {
            this.game = game;
            this.playtime = playtime;
        }
    }
}
