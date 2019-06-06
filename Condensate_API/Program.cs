using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace Condensate_API
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateWebHostBuilder(args).Build().Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args)
        {
            var host = WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>();
                //.ConfigureAppConfiguration(ConfigConfiguration)
            //.UseUrls("http://localhost:5000", "https://localhost:5001")
            return host;
        }

        //static void ConfigConfiguration(WebHostBuilderContext ctx, IConfigurationBuilder config)
        //{
        //    config.SetBasePath(Directory.GetCurrentDirectory())
        //        .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
        //        .AddJsonFile($"config.{ctx.HostingEnvironment.EnvironmentName}.json", optional: true, reloadOnChange: true);
        //}
    }
}
