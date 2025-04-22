using Demo.API.Data;
using Microsoft.AspNetCore.Mvc;

namespace Demo.API.Repositories
{
    public interface IProject
    {
        Task<Sample> GetAll();
        Task<Datas> Get(DateTime SamplingTime);
        Task Update(DateTime SamplingTime, List<Properties> model);
    }
}
