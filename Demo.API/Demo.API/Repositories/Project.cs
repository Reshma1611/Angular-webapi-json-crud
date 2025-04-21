using Demo.API.Data;
using System.Text.Json;
using System;

namespace Demo.API.Repositories
{
    public class Project : IProject
    {
        public async Task<Sample> Get()
        {
            Sample sample = new Sample();
            string jsonFilePath = Directory.GetCurrentDirectory() + "/Data/Sample.json";

            string jsonString = File.ReadAllText(jsonFilePath);

            sample = JsonSerializer.Deserialize<Sample>(jsonString);

            return sample;
        }
    }
}
