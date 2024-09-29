import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BrowserUtils } from '@azure/msal-browser';
import { MsalGuard } from '@azure/msal-angular';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [MsalGuard], }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // Don't perform initial navigation in iframes or popups
      initialNavigation:
        !BrowserUtils.isInIframe() && !BrowserUtils.isInPopup()
          ? "enabledNonBlocking"
          : "disabled", // Set to enabledBlocking to use Angular Universal
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
