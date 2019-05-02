using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Condensate_API.Models;

namespace Condensate_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        // GET: api/Todo
        [HttpGet]
        public ActionResult<User> GetUser()
        {
            return new User();
        }
    }
}
