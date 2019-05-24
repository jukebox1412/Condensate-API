using Microsoft.AspNetCore.Builder;
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

        private IHostingEnvironment _env { get; set; }
        public Startup(IHostingEnvironment env, IConfiguration configuration)
        {
            Configuration = configuration;
            _env = env;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddHttpClient("steam", c =>
            {
                c.BaseAddress = new System.Uri("https://store.steampowered.com/api/appdetails/");
                c.DefaultRequestHeaders.Add("User-Agent", "Condensate/0.1");
                c.DefaultRequestHeaders.Add("Accept", "application/json");
                c.DefaultRequestHeaders.Add("Host", "store.steampowered.com");
                c.DefaultRequestHeaders.Add("accept-encoding", "gzip, deflate");
                c.DefaultRequestHeaders.Add("Connection", "keep-alive");
            }).ConfigurePrimaryHttpMessageHandler(() =>
             new HttpClientHandler()
             {
                 AutomaticDecompression = DecompressionMethods.GZip | DecompressionMethods.Deflate
             });

            services.AddSingleton<MongoClientService>();
            services.AddScoped<GameService>();
            services.AddHostedService<ScraperService>();
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);

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


            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseMvc();
        }
    }
}
