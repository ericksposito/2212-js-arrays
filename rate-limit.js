var gitHubApiStatusService = GitHubApiStatusService(new AuthenticationHeaderValue("885bf00198a13d0edc16f06ff1a18ec5cb29b00b"));

var apiRateLimits = gitHubApiStatusService.GetApiRateLimits();

// REST API Results
Console.WriteLine(`What is the GitHub REST API Rate Limit? ${apiRateLimits.RestApi.RateLimit}`); // What is the GitHub REST API Rate Limit? 5000
// Console.WriteLine($"How many REST API requests do I have remaining? {apiRateLimits.RestApi.RemainingRequestCount}"); // How many REST API requests do I have remaining? 4983
// Console.WriteLine($"How long until the GitHub REST API Rate Limit resets? {apiRateLimits.RestApi.RateLimitReset_TimeRemaining}"); // How long until the GitHub REST API Rate Limit resets? 00:40:13.8035515
// Console.WriteLine($"When does the GitHub REST API Rate Limit reset? {apiRateLimits.RestApi.RateLimitReset_DateTime}"); // When does the GitHub REST API Rate Limit reset? 10/29/2020 3:28:58 AM +00:00

// Console.WriteLine();

// // GraphQL API Results
// Console.WriteLine($"What is the GitHub GraphQL API Rate Limit? {apiRateLimits.GraphQLApi.RateLimit}"); // What is the GitHub GraphQL API Rate Limit? 5000
// Console.WriteLine($"How many GraphQL API requests do I have remaining? {apiRateLimits.GraphQLApi.RemainingRequestCount}"); // How many GraphQL API requests do I have remaining? 5000
// Console.WriteLine($"How long until the GitHub GraphQL API Rate Limit resets? {apiRateLimits.GraphQLApi.RateLimitReset_TimeRemaining}"); // How long until the GitHub GraphQL API Rate Limit resets? 00:59:59.8034526
// Console.WriteLine($"When does the GitHub GraphQL API Rate Limit reset? {apiRateLimits.GraphQLApi.RateLimitReset_DateTime}"); // When does the GitHub GraphQL API Rate Limit reset? 10/29/2020 3:48:44 AM +00:00