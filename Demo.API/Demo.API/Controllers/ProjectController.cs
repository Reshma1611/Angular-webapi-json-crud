using Demo.API.Data;
using Demo.API.Repositories;
using Microsoft.AspNetCore.Mvc;

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
        public async Task<IActionResult> GetAll()
        {
            var result = await _project.GetAll();
            return Ok(result);
        }

        [HttpGet("{SamplingTime}")]
        public async Task<IActionResult> Get(DateTime SamplingTime)
        {
            var result = await _project.Get(SamplingTime);
            return Ok(result);
        }

        [HttpPut("{SamplingTime}")]
        public async Task<IActionResult> Update(DateTime SamplingTime, [FromBody] List<Properties> model)
        {
            await _project.Update(SamplingTime, model);
            return Ok();
        }
    }
}
