import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { MsalService } from '@azure/msal-angular';
import { catchError, switchMap } from 'rxjs/operators';
import { AuthenticationResult } from '@azure/msal-browser';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private msalService: MsalService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const account = this.msalService.instance.getAllAccounts()[0];
        const scopes = ['https://qmediax.onmicrosoft.com/api/read']; // Update with your API scope

        if (!account) {
            return next.handle(req);
        }

        return from(this.msalService.instance.acquireTokenSilent({ account, scopes })).pipe(
            switchMap((tokenResponse: AuthenticationResult) => {
                const clonedReq = req.clone({
                    setHeaders: {
                        Authorization: `Bearer ${tokenResponse.accessToken}`
                    }
                });
                return next.handle(clonedReq);
            }),
            catchError((error) => {
                console.error('Token acquisition failed', error);
                return next.handle(req);
            })
        );
    }
}
