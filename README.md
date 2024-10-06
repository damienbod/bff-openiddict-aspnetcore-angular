# OpenIddict BFF security architecture using ASP.NET Core and nx Angular standalone

 [![.NET and npm build](https://github.com/damienbod/bff-openiddict-aspnetcore-angular/actions/workflows/dotnet.yml/badge.svg)](https://github.com/damienbod/bff-openiddict-aspnetcore-angular/actions/workflows/dotnet.yml) [![License](https://img.shields.io/badge/license-Apache%20License%202.0-blue.svg)](https://github.com/damienbod/bff-openiddict-aspnetcore-angular/blob/main/bff/LICENSE)

[Secure Angular application using OpenIddict and ASP.NET Core with BFF](https://damienbod.com/2023/09/25/secure-angular-application-using-openiddict-and-asp-net-core-with-bff/)
## Debugging

Start the Angular project from the **ui** folder

```
nx serve --ssl
```

Start the ASP.NET Core projects from the **server** folder and the **identityProvider**

```
dotnet run
```

Or just open Visual Studio and run the solution.

## Credits and used libraries

- NetEscapades.AspNetCore.SecurityHeaders
- Yarp.ReverseProxy
- OpenIddict
- ASP.NET Core
- Angular 
- Nx
- OpenIddict

## History

- 2024-10-03 Updated Angular
- 2024-10-03 Updated packages
- 2024-06-06 Updated packages, Angular 18
- 2024-04-27 Updated packages and build, code clean up
- 2024-01-22 Updated packages
- 2023-12-30 Open Redirect protection for login
- 2023-11-16 .NET 8 updates

## Links

https://github.com/damienbod/bff-aspnetcore-angular

https://learn.microsoft.com/en-us/aspnet/core/introduction-to-aspnet-core

https://nx.dev/getting-started/intro

https://github.com/isolutionsag/aspnet-react-bff-proxy-example

https://github.com/openiddict

https://github.com/damienbod/bff-auth0-aspnetcore-angular

https://github.com/damienbod/bff-azureadb2c-aspnetcore-angular

https://github.com/damienbod/bff-aspnetcore-vuejs

https://github.com/damienbod/bff-MicrosoftEntraExternalID-aspnetcore-angular
