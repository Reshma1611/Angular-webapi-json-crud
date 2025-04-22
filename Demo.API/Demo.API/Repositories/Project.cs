using Demo.API.Data;
using System.Text.Json;
using System;

namespace Demo.API.Repositories
{
    public class Project : IProject
    {
        private static string sampleJsonFilePath = Directory.GetCurrentDirectory() + "/Data/Sample.json";

        public async Task<Sample> GetFileData()
        {
            Sample sample = new Sample();
            string jsonString = File.ReadAllText(sampleJsonFilePath);
            sample = JsonSerializer.Deserialize<Sample>(jsonString);
            return sample;
        }
        public async Task<Sample> GetAll()
        {
            Sample sample = await GetFileData();
            return sample;
        }
        public async Task<Datas> Get(DateTime SamplingTime)
        {
            Sample sample = await GetFileData();
            Datas data = sample.Datas.FirstOrDefault(x => x.SamplingTime.ToUniversalTime() == SamplingTime.ToUniversalTime());
            return data;
        }

        public async Task Update(DateTime SamplingTime, List<Properties> model)
        {
            Sample sample = await GetFileData();

            var dataToBeUpdate = sample.Datas.FirstOrDefault(x => x.SamplingTime.ToUniversalTime() == SamplingTime.ToUniversalTime());

            if(dataToBeUpdate != null)
            {
                dataToBeUpdate.Properties = model;
                var updatedJson = JsonSerializer.Serialize(sample, new JsonSerializerOptions { WriteIndented = true });

                File.WriteAllText(sampleJsonFilePath, updatedJson);
            }
        }
    }
}
