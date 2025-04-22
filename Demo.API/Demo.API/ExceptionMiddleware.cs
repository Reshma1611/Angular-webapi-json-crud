using System.Net;
using System.Text.Json;

namespace Demo.API
{
    public class ExceptionMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILogger<ExceptionMiddleware> _logger;

        public ExceptionMiddleware(RequestDelegate next, ILogger<ExceptionMiddleware> logger)
        {
            _next = next;
            _logger = logger;
        }
        public async Task Invoke(HttpContext context)
        {
            try
            {
                await _next(context);
            }
            catch (Exception ex)
            {
                _logger.LogError("");
                await HandleExceptionAsync(context, ex, _logger);
            }
        }
        private static async Task HandleExceptionAsync(HttpContext context, Exception exception, ILogger<ExceptionMiddleware> logger)
        {
            context.Response.ContentType = "application/json";
            context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
            var response = new
            {
                StatusCode = (int)HttpStatusCode.InternalServerError,
                Message = "Interval server error",
                Detailed = exception.Message
            };

            var jsonResponse = JsonSerializer.Serialize(response);
            logger.LogError($"Exception:  {exception.Message}");
            logger.LogError($"StackTrace:  {exception.StackTrace}");
            await context.Response.WriteAsync(jsonResponse);
        }

    }
}
