using Demo.API.Repositories;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Demo.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectController : ControllerBase
    {
        private readonly IProject _project;
        public ProjectController(IProject project)
        {
            _project = project;            
        }
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var result = await _project.Get();
            return Ok(result);
        }

        //// GET api/<ProjectController>/5
        //[HttpGet("{id}")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        //// POST api/<ProjectController>
        //[HttpPost]
        //public void Post([FromBody] string value)
        //{
        //}

        //// PUT api/<ProjectController>/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        //// DELETE api/<ProjectController>/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
