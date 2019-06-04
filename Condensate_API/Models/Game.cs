using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;

namespace Condensate_API.Models
{
    public class Game
    {
        public static string STORE_GAME_LINK_PREFIX = "https://store.steampowered.com/app/";
        public static string STEAM_LOGO_URL = "https://steamcommunity-a.akamaihd.net/public/shared/images/header/globalheader_logo.png";
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("appid")]
        public uint appid { get; set; }

        [BsonElement("header_image")]
        public string header_image { get; set; }

        [BsonElement("price")]
        public double price { get; set; }

        [BsonElement("name")]
        public string name { get; set; }

        [BsonElement("genres")]
        public HashSet<string> genres { get; set; }

        [BsonElement("store_link")]
        public string store_link { get; set; }
    }
}
