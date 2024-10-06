import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService, MsalBroadcastService } from '@azure/msal-angular';
import { EventMessage, EventType, InteractionStatus, RedirectRequest } from '@azure/msal-browser';
import { filter, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  title = 'enlinqd-UI';
  isIframe = false;
  loginDisplay = false;
  private readonly _destroying$ = new Subject<void>();

  constructor(
    // @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
    private msalBroadcastService: MsalBroadcastService,
    private authService: MsalService,
    private router: Router) { }


  ngOnInit(): void {
    this.msalBroadcastService.msalSubject$
      .pipe(
        filter((msg: EventMessage) => msg.eventType === EventType.LOGIN_SUCCESS),
      )
      .subscribe((result: EventMessage) => {
        console.log(result);
      });

    this.msalBroadcastService.inProgress$
      .pipe(
        filter((status: InteractionStatus) => status === InteractionStatus.None)
      )
      .subscribe(() => {
        this.setLoginDisplay();
      });


    this.isIframe = window !== window.parent && !window.opener;

    // this.authService.instance?.handleRedirectPromise().then(
    //   res => {
    //     if (res?.account !== null) {
    //       this.authService.instance.setActiveAccount(res.account);
    //     }
    //   }
    // );

    this.authService.initialize().subscribe(result => {
      console.log(result)
    })

    this.msalBroadcastService.inProgress$
      .pipe(
        filter((status: InteractionStatus) => status === InteractionStatus.None),
        takeUntil(this._destroying$)
      )
      .subscribe(() => {
        this.setLoginDisplay();
        this.checkAndSetActiveAccount();
      })
  }

  ngOnDestroy(): void {
    this._destroying$.next(undefined);
    this._destroying$.complete();
  }

  login() {
    const loginRequest: RedirectRequest = {
      scopes: ["user.read", "profile"],
      prompt: "select_account"
    }
    // this.authService.loginPopup({
    //   scopes: ["user.read"],
    //   prompt: 'select_account',
    // }).subscribe((res: AuthenticationResult) => {
    //   this.authService.instance.setActiveAccount(res.account)
    // });
    // if (this.msalGuardConfig.authRequest) {
    //   this.authService.loginRedirect({ ...this.msalGuardConfig.authRequest } as RedirectRequest);
    // } else {
    this.authService.loginRedirect(loginRequest);
    // }
  }

  checkAndSetActiveAccount() {
    /**
     * If no active account set but there are accounts signed in, sets first account to active account
     * To use active account set here, subscribe to inProgress$ first in your component
     * Note: Basic usage demonstrated. Your app may require more complicated account selection logic
     */
    let activeAccount = this.authService.instance.getActiveAccount();

    if (!activeAccount && this.authService.instance.getAllAccounts().length > 0) {
      let accounts = this.authService.instance.getAllAccounts();
      this.authService.instance.setActiveAccount(accounts[0]);
    }
  }


  logout() { // Add log out function here
    this.authService.logout();
    // this.authService.logoutRedirect({
    //   postLogoutRedirectUri: 'http://localhost:4200'
    // });
  }

  isLoggedIn(): boolean {
    return this.authService.instance?.getActiveAccount() !== null;
  }

  setLoginDisplay() {
    this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
  }

  public async NavigateToAdminDashboard(): Promise<void> {
    await this.router.navigate(['admin']);
  }
}