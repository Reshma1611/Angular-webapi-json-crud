namespace Demo.API.Data
{
    public class Sample
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<Datas> Datas { get; set; }
    }
    public class Datas
    {
        public DateTime SamplingTime { get; set; }
        public List<Properties> Properties { get; set; }
    }

    public class Properties
    {
        public object? Value { get; set; }
        public string? Label { get; set; }
    }
}
