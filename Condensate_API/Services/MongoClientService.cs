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
            string cn = config.GetConnectionString("CondensateDB").Replace("<password>", Environment.GetEnvironmentVariable("MONGO_DROPLET0_PW"));
            client = new MongoClient(cn);
            database = client.GetDatabase("CondensateDB");
        }
    }
}
