using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;

namespace Condensate_API.Models
{
    public class Game
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("appid")]
        public long appid { get; set; }

        [BsonElement("header_image")]
        public string header_image { get; set; }

        [BsonElement("price")]
        public double price { get; set; }

        [BsonElement("name")]
        public string name { get; set; }

        [BsonElement("genres")]
        public List<string> genres { get; set; }

        [BsonElement("store_link")]
        public string store_link { get; set; }
    }
}
