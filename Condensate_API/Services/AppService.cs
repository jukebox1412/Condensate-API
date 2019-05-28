using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Net.Http;
using System.Threading.Tasks;
using Condensate_API.Models;
using Microsoft.Extensions.Configuration;
using MongoDB.Bson;
using MongoDB.Driver;
using Newtonsoft.Json.Linq;

namespace Condensate_API.Services
{
    public class AppService
    {
        private readonly IMongoCollection<App> _Apps;
        private readonly HttpClient _clientApi;
        private static int ScrapeCompare(App a, App b)
        {
            return a.scrape_count.CompareTo(b.scrape_count);
        }

        public AppService(IConfiguration config, MongoClientService mongoClientService, IHttpClientFactory clientFactory)
        {
            _Apps = mongoClientService.database.GetCollection<App>("Apps");
            _clientApi = clientFactory.CreateClient("steam-api");

        }

        public App GetLeastScrapedGame()
        {
            var ret = _Apps.Find(app => app.type.Equals("game")).ToList();
            ret.Sort(ScrapeCompare);
            return ret.FirstOrDefault();
        }

        public List<App> Get()
        {
            return _Apps.Find(App => true).ToList();
        }

        public App Get(string id)
        {
            return _Apps.Find<App>(App => App.Id == id).FirstOrDefault();
        }

        public App Create(App App)
        {
            _Apps.InsertOne(App);
            return App;
        }

        public void Update(string id, App AppIn)
        {
            _Apps.ReplaceOne(App => App.Id == id, AppIn);
        }

        public void Update(App AppIn)
        {
            _Apps.ReplaceOne(App => App.appid == AppIn.appid, AppIn, new UpdateOptions { IsUpsert = true });
        }

        public void Remove(App AppIn)
        {
            _Apps.DeleteOne(App => App.Id == AppIn.Id);
        }

        public void Remove(string id)
        {
            _Apps.DeleteOne(App => App.Id == id);
        }

        /**
         * Get all apps from steam and save them to DB
         */
        public async Task<ICollection<App>> UpdateAllApps()
        {
            HashSet<App> apps = new HashSet<App>();
            var response = await _clientApi.GetAsync($"ISteamApps/GetAppList/v0002/");
            if (response.IsSuccessStatusCode)
            {
                JToken json = JToken.Parse(await response.Content.ReadAsStringAsync())["applist"]["apps"];
                var s = json.Children();
                var new_apps = s.Select(c => {
                    App app = new App();
                    app.appid = (uint)c["appid"];
                    app.name = (string)c["name"];
                    app.scrape_count = 0;
                    app.type = "game";
                    return app;
                });

                var old_apps = Get();
                var to_insert = new_apps.Except(old_apps, new AppEqualityComparer());
                var to_remove = old_apps.Except(new_apps, new AppEqualityComparer());

                _Apps.InsertMany(to_insert);
                //foreach (JObject content in json.Children<JObject>())
                //{
                //    App app = new App();
                //    app.appid = (uint)content["appid"];
                //    app.name = (string)content["name"];
                //    app.scrape_count = 0;
                //    app.type = "game";

                //    //var builder = Builders<App>.Filter;
                //    //var filt = builder.Eq(a => a.appid, app.appid);
                //    Expression<Func<App, bool>> filt = a => a.appid == app.appid;
                //    var found = _Apps.Find(filt).FirstOrDefault();

                //    // if not in DB, then add it
                //    if (found == null)
                //    {
                //        Create(app);
                //    }
                //}
            }

            return apps;
        }
    }
}
