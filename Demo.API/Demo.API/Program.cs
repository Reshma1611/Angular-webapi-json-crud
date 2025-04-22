using Demo.API;
using Demo.API.Repositories;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddCors(x => x.AddDefaultPolicy(c => c.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod()));

builder.Services.AddScoped<IProject, Project>();

builder.Services.AddSwaggerGen();

var app = builder.Build();
app.UseMiddleware<ExceptionMiddleware>();

app.UseCors(c => c.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
