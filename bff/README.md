# Auth0 BFF security architecture using ASP.NET Core and nx Angular standalone

[![.NET and npm build](https://github.com/damienbod/bff-auth0-aspnetcore-angular/actions/workflows/dotnet.yml/badge.svg)](https://github.com/damienbod/bff-auth0-aspnetcore-angular/actions/workflows/dotnet.yml) [![License](https://img.shields.io/badge/license-Apache%20License%202.0-blue.svg)](https://github.com/damienbod/bff-auth0-aspnetcore-angular/blob/main/LICENSE)

## Debugging

Start the Angular project from the **ui** folder

```
nx serve --ssl
```

Start the ASP.NET Core project from the **server** folder

```
dotnet run
```

Or just open Visual Studio and run the solution.

## Credits and used libraries

- NetEscapades.AspNetCore.SecurityHeaders
- Yarp.ReverseProxy
- Microsoft.Identity.Web
- ASP.NET Core
- Angular 
- Nx

## Links

https://github.com/damienbod/bff-aspnetcore-angular

https://learn.microsoft.com/en-us/aspnet/core/introduction-to-aspnet-core

https://nx.dev/getting-started/intro

https://github.com/AzureAD/microsoft-identity-web

https://github.com/isolutionsag/aspnet-react-bff-proxy-example