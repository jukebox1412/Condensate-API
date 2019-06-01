using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Condensate_API.Models
{
    public class GameEqualityComparer : IEqualityComparer<Game>
    {
        public bool Equals(Game x, Game y)
        {
            return x.appid == y.appid;
        }

        public int GetHashCode(Game obj)
        {
            return obj.appid.GetHashCode();
        }
    }
}
