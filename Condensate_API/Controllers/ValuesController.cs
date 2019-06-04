using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using StackExchange.Profiling;

namespace Condensate_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
       // GET api/values
       //[HttpGet]
       // public ActionResult<IEnumerable<string>> Get()
       // {
       //     using (MiniProfiler.Current.Step("Get method"))
       //     {

       //         return new string[] { "value1", "value2" };
       //     }
       // }

       // GET api/values? id = 5
        private ILogger<ValuesController> _logger;
        public ValuesController(ILogger<ValuesController> logger)
        {
            _logger = logger;
        }
        [HttpGet]
        public ActionResult<string> Get(string id)
        {
            return UsersController.GetSteamID(id);
        }

        // POST api/values
        [HttpPost]
        public string Post([FromBody] string id)
        {
            return UsersController.GetSteamID(id);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
