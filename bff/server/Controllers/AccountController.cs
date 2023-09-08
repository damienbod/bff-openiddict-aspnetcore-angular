using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.OpenIdConnect;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BffOpenIddict.Server.Controllers;

[Route("api/[controller]")]
public class AccountController : ControllerBase
{
    [HttpGet("Login")]
    public ActionResult Login(string? returnUrl, string? claimsChallenge)
    {
        var redirectUri = !string.IsNullOrEmpty(returnUrl) ? returnUrl : "/";

        var properties = new AuthenticationProperties { RedirectUri = redirectUri };

        if(claimsChallenge != null)
        {
            string jsonString = claimsChallenge.Replace("\\", "")
                .Trim(new char[1] { '"' });

            properties.Items["claims"] = jsonString;
        }

        return Challenge(properties);
    }

    // [ValidateAntiForgeryToken] // not needed explicitly due the the Auto global definition.
    [IgnoreAntiforgeryToken] // need to apply this to the form post request
    [Authorize]
    [HttpPost("Logout")]
    public IActionResult Logout()
    {
        return SignOut(
            new AuthenticationProperties { RedirectUri = "/" },
            CookieAuthenticationDefaults.AuthenticationScheme,
            OpenIdConnectDefaults.AuthenticationScheme);
    }
}
