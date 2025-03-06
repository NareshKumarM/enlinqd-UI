import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService, MsalBroadcastService } from '@azure/msal-angular';
import { EventMessage, EventType, InteractionStatus, RedirectRequest } from '@azure/msal-browser';
import { filter, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss', standalone: false
})
export class HomeComponent implements OnInit, OnDestroy {
  title = 'enlinqd-UI';
  isIframe = false;
  loginDisplay = false;
  private readonly _destroying$ = new Subject<void>();

  constructor(
    // @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
    private msalBroadcastService: MsalBroadcastService,
    private msalService: MsalService,
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

    // this.msalService.instance?.handleRedirectPromise().then(
    //   res => {
    //     if (res?.account !== null) {
    //       this.msalService.instance.setActiveAccount(res.account);
    //     }
    //   }
    // );

    this.msalService.initialize().subscribe(result => {
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

  login() { // this.msalService.loginPopup({
    //   scopes: ["user.read"],
    //   prompt: 'select_account',
    // }).subscribe((res: AuthenticationResult) => {
    //   this.msalService.instance.setActiveAccount(res.account)
    // });
    // if (this.msalGuardConfig.authRequest) {
    //   this.msalService.loginRedirect({ ...this.msalGuardConfig.authRequest } as RedirectRequest);
    // } else {
    //   this.msalService.loginRedirect(loginRequest);
    // }

    // const loginRequest: RedirectRequest = {
    //   scopes: ["user.read", "profile"],
    //   prompt: "select_account"
    // }

    // this.msalService.loginRedirect(loginRequest);

    this.msalService.loginRedirect();
    
  }

  checkAndSetActiveAccount() {
    /**
     * If no active account set but there are accounts signed in, sets first account to active account
     * To use active account set here, subscribe to inProgress$ first in your component
     * Note: Basic usage demonstrated. Your app may require more complicated account selection logic
     */
    let activeAccount = this.msalService.instance.getActiveAccount();

    if (!activeAccount && this.msalService.instance.getAllAccounts().length > 0) {
      let accounts = this.msalService.instance.getAllAccounts();
      this.msalService.instance.setActiveAccount(accounts[0]);
    }
  }


  logout() { // Add log out function here
    this.msalService.logout();
    // this.msalService.logoutRedirect({
    //   postLogoutRedirectUri: 'http://localhost:4200'
    // });
  }

  isLoggedIn(): boolean {
    return this.msalService.instance?.getActiveAccount() !== null;
  }

  setLoginDisplay() {
    this.loginDisplay = this.msalService.instance.getAllAccounts().length > 0;
  }

  public async NavigateToAdminDashboard(): Promise<void> {
    await this.router.navigate(['admin']);
  }
}