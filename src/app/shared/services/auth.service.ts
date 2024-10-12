import {
  HttpHeaders,
  HttpErrorResponse,
  HttpClient,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Sandbox
  // protected OAUTH_CLIENT = 'AVdwHCBPPmsbsXE4NAVVIuzjBTnI-Ri1QZdLXHL8cDVIMOJti-Dhr3BUt6rE9Okj8vovCSDrxGPALiFC';
  // protected OAUTH_SECRET = 'EH8iPtLfrkOZB8T1_1k3mX2Ai75xX9VwRTc1mgr93afFrilmv1w1t-sQpKjd4yafWXVCEekjpwjdffZj';

  // Live
  protected OAUTH_CLIENT =
    'AaTZ-26N704BB6kiYsJgKkTcL9BPVrZ696XLEi77K6v4UHy_vWCSqvAu6faTCfD8EWLEv2PJe39IuceN';
  protected OAUTH_SECRET =
    'EL-_Rbc1N7JyhS-AsbUJAnPIN4hsLS7cczNOeNiTbpEE2HA53NQqDtSMrwrWkpZxq0X1BYJc-CZut8oc';

  // Sandbox
  // protected API_URL = 'https://api-m.sandbox.paypal.com/v1/oauth2/token';
  // Live
  protected API_URL = 'https://api-m.paypal.com/v1/oauth2/token';

  protected HTTP_OPTIONS = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization:
        'Basic ' + btoa(this.OAUTH_CLIENT + ':' + this.OAUTH_SECRET),
    }),
  };

  constructor(private http: HttpClient, private tokenService: TokenService) {}

  login(loginData: any): Observable<any> {
    this.tokenService.removeToken();
    this.tokenService.removeRefreshToken();
    const body = new HttpParams()
      .set('username', loginData.username)
      .set('password', loginData.password)
      .set('grant_type', 'client_credentials');

    return this.http.post<any>(this.API_URL, body, this.HTTP_OPTIONS).pipe(
      tap((res) => {
        this.tokenService.saveToken(res.access_token);
        this.tokenService.saveRefreshToken(res.refresh_token);
      }),
      catchError(this.handleError)
    );
  }

  refreshToken(refreshData: any): Observable<any> {
    this.tokenService.removeToken();
    this.tokenService.removeRefreshToken();
    const body = new HttpParams()
      .set('refresh_token', refreshData.refresh_token)
      .set('grant_type', 'refresh_token');
    return this.http
      .post<any>(this.API_URL + 'oauth/token', body, this.HTTP_OPTIONS)
      .pipe(
        tap((res) => {
          this.tokenService.saveToken(res.access_token);
          this.tokenService.saveRefreshToken(res.refresh_token);
        }),
        catchError(this.handleError)
      );
  }

  logout(): void {
    this.tokenService.removeToken();
    this.tokenService.removeRefreshToken();
  }

  register(data: any): Observable<any> {
    return this.http.post<any>(this.API_URL + 'oauth/signup', data).pipe(
      tap((_) => AuthService.log('register')),
      catchError(this.handleError)
    );
  }

  secured(): Observable<any> {
    return this.http
      .get<any>(this.API_URL + 'secret')
      .pipe(catchError(this.handleError));
  }

  public handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      return `An error occurred: ${error.error.message}`;
    } else {
      const name: string = error.name ? 'name: ' + error.name : '';
      const message: string = error.message ? 'message: ' + error.message : '';

      return (
        name +
        ', ' +
        message +
        ', ' +
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`
      );
    }
  }

  private static log(message: string): any {
    console.log(message);
  }
}
