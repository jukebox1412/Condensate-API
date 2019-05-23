using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Condensate_API.Services
{
    public class MongoClientService
    {
        public MongoClient client { get; private set; }
        public IMongoDatabase database { get; private set; }

        public MongoClientService(IConfiguration config)
        {
            client = new MongoClient(config.GetConnectionString("CondensateDB"));
            database = client.GetDatabase("CondensateDB");
        }
    }
}
