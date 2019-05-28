using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Condensate_API.Models
{
    public class App
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("appid")]
        public uint appid { get; set; }

        [BsonElement("name")]
        public string name { get; set; }

        [BsonElement("scrape_count")]
        public uint scrape_count { get; set; }

        [BsonElement("type")]
        public string type { get; set; }
    }
}
