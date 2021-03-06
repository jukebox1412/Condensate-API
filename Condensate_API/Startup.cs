﻿using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Swashbuckle.AspNetCore.Swagger;
using Microsoft.AspNetCore.HttpOverrides;
using Condensate_API.Services;
using System.Net.Http;
using System.Net;


namespace Condensate_API
{
    public class Startup
    {

        public Startup(IHostingEnvironment env, IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            var decompHandler = new HttpClientHandler()
            {
                AutomaticDecompression = DecompressionMethods.GZip | DecompressionMethods.Deflate
            };
            services.AddHttpClient("steam-store", c =>
            {
                c.BaseAddress = new System.Uri("https://store.steampowered.com/api/");
                c.DefaultRequestHeaders.Add("User-Agent", "Condensate/0.1");
                c.DefaultRequestHeaders.Add("Accept", "application/json");
                c.DefaultRequestHeaders.Add("Host", "store.steampowered.com");
                c.DefaultRequestHeaders.Add("accept-encoding", "gzip, deflate");
                c.DefaultRequestHeaders.Add("Connection", "keep-alive");
            }).ConfigurePrimaryHttpMessageHandler(() => decompHandler);

            services.AddHttpClient("steam-api", c =>
            {
                c.BaseAddress = new System.Uri("https://api.steampowered.com/");
                c.DefaultRequestHeaders.Add("User-Agent", "Condensate/0.1");
                c.DefaultRequestHeaders.Add("Accept", "application/json");
                c.DefaultRequestHeaders.Add("Host", "api.steampowered.com");
                c.DefaultRequestHeaders.Add("accept-encoding", "gzip, deflate");
                c.DefaultRequestHeaders.Add("Connection", "keep-alive");
            }).ConfigurePrimaryHttpMessageHandler(() => decompHandler);

            services.AddSingleton<MongoClientService>();
            services.AddSingleton<GameService>();
            services.AddSingleton<AppService>();
            services.AddSingleton<GameCacheService>();
            services.AddHostedService<BackgroundServiceStarter<GameCacheService>>();
            services.AddHostedService<ScraperService>();
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "wwwroot";
            });

            // profiling
            services.AddMiniProfiler(options =>
               options.RouteBasePath = "/profiler"
            );

            // Register the Swagger generator, defining 1 or more Swagger documents
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Info
                {
                    Version = "v1",
                    Title = "Condensate API",
                    Description = "ASP.NET Core Web API for Condensate",
                    Contact = new Contact
                    {
                        Name = "Zhi Bin Wu",
                        Email = "jukebox1412@gmail.com",
                        Url = "https://github.com/jukebox1412/"
                    },
                    License = new License
                    {
                        Name = "MIT",
                        Url = "https://opensource.org/licenses/MIT"
                    }
                });
            });


        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                // profiling, url to see last profile check: http://localhost:xxxxx/profiler/results
                app.UseMiniProfiler();
            }

            // Enable middleware to serve generated Swagger as a JSON endpoint.
            app.UseSwagger();

            // Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.), 
            // specifying the Swagger JSON endpoint.
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
            });

            app.UseForwardedHeaders(new ForwardedHeadersOptions
            {
                ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto
            });


            //app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller}/{action=Index}/{id?}");
            });

            app.UseSpa(spa =>
            {
                // To learn more about options for serving an Angular SPA from ASP.NET Core,
                // see https://go.microsoft.com/fwlink/?linkid=864501

                spa.Options.SourcePath = "wwwroot";

                //spa.UseAngularCliServer(npmScript: "build");
            });
        }
    }
}
