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
            //Console.WriteLine(args.Length);
            //foreach (string arg in args)
            //{
            //    Console.WriteLine(arg);
            //}

            CreateWebHostBuilder(args).Build().Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args)
        {
            var host = WebHost.CreateDefaultBuilder(args)
                 .UseStartup<Startup>();
            if (host.GetSetting("environment") == "Development")
                host.UseUrls("http://localhost:5000", "https://localhost:5001");
            else
                host.UseUrls("http://localhost:80", "https://localhost:443");
            return host;
        }
    }
}
