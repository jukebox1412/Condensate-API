using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Condensate_API.Models
{
    public class AppEqualityComparer : IEqualityComparer<App>
    {
        public bool Equals(App x, App y)
        {
            return x.appid.Equals(y.appid);
        }

        public int GetHashCode(App obj)
        {
            return obj.appid.GetHashCode();
        }
    }
}
