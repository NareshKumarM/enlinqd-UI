import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';
import { MSAL_GUARD_CONFIG, MSAL_INSTANCE, MSAL_INTERCEPTOR_CONFIG, MsalGuard, MsalGuardConfiguration, MsalInterceptor, MsalInterceptorConfiguration, MsalModule, MsalRedirectComponent, MsalService } from '@azure/msal-angular';
import { BrowserCacheLocation, InteractionType, IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
import { AngularMaterialModule } from './shared/modules/material.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: "5b1f63e9-b2e9-41a8-a437-abc9f77ed157",
      authority: "https://login.microsoftonline.com/e7171d83-ff27-4c9a-927b-d95ede538e95",
      redirectUri: "https://blue-mud-0b9225500.5.azurestaticapps.net",
      postLogoutRedirectUri: "https://blue-mud-0b9225500.5.azurestaticapps.net",
      navigateToLoginRequestUrl: true
    },
    cache: {
      cacheLocation: BrowserCacheLocation.LocalStorage,
    },
    system: {
      allowNativeBroker: false
    }
  })
}

/**
   * Configuring the AAD login type and api related permissions
   * @returns AAD Guard configuration
   */
export function MSALGuardConfigFactory(): MsalGuardConfiguration {
  return {
    interactionType: InteractionType.Redirect,
    authRequest: {
      scopes: ["user.read"]
    },
    loginFailedRoute: '/'
  }
}

/**
 * Interceptor configuration for the API calls
 * @returns 
 */

export function MSALInterceptorConfig(): MsalInterceptorConfiguration {
  const protectedResourceMap = new Map<string, Array<string>>();
  protectedResourceMap.set("https://graph.microsoft.com/v1.0/me", ["user.read"])
  return {
    interactionType: InteractionType.Redirect, // MSAL Interceptor Configuration
    protectedResourceMap
  }
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AngularMaterialModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    MsalModule,
    RouterModule,
    //   MsalModule.forRoot(
    //   new PublicClientApplication({
    //     auth: {
    //       // Application (client) ID from the app registration
    //       clientId: "10caab07-a5a9-4fbe-a63b-d80eb597163e",
    //       // The Azure cloud instance and the app's sign-in audience (tenant ID, common, organizations, or consumers)
    //       authority: "https://login.microsoftonline.com/e7171d83-ff27-4c9a-927b-d95ede538e95",
    //       // This is your redirect URI
    //       redirectUri: "http://localhost:4200",
    //     },
    //     cache: {
    //       cacheLocation: "localStorage",
    //       storeAuthStateInCookie: isIE, // Set to true for Internet Explorer 11
    //     },
    //   }),
    //   {
    //     interactionType: InteractionType.Redirect, // MSAL Guard Configuration
    //     authRequest: {
    //       scopes: ["user.read"],
    //     },
    //   },
    //   {
    //     interactionType: InteractionType.Redirect, // MSAL Interceptor Configuration
    //     protectedResourceMap: new Map([
    //       ["https://graph.microsoft.com/v1.0/me", ["user.read"]],
    //     ]),
    //   }
    // ),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    },
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory,
    },
    {
      provide: MSAL_GUARD_CONFIG,
      useFactory: MSALGuardConfigFactory
    },
    {
      provide: MSAL_INTERCEPTOR_CONFIG,
      useFactory: MSALInterceptorConfig
    },
    MsalService,
    MsalGuard,
    provideAnimationsAsync(),
    // MsalConfigService
  ],
  bootstrap: [AppComponent, MsalRedirectComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
