using Demo.API.Data;

namespace Demo.API.Repositories
{
    public interface IProject
    {
        Task<Sample> Get();
    }
}
