import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  public ACCESS_TOKEN = 'access_token';
  public REFRESH_TOKEN = 'refresh_token';

  constructor() { }

  public getToken(): string | null {
    return localStorage.getItem(this.ACCESS_TOKEN);
  }

  public getRefreshToken(): string | null {
    return localStorage.getItem(this.REFRESH_TOKEN);
  }

  public saveToken(token: string): void {
    localStorage.setItem('logged_in', 'yes');
    localStorage.setItem(this.ACCESS_TOKEN, token);
  }

  public saveRefreshToken(refreshToken: string): void {
    localStorage.setItem('logged_in', 'yes');
    localStorage.setItem(this.REFRESH_TOKEN, refreshToken);
  }

  public removeToken(): void {
    localStorage.setItem('logged_in', 'no');
    localStorage.removeItem(this.ACCESS_TOKEN);
  }

  public removeRefreshToken(): void {
    localStorage.setItem('logged_in', 'no');
    localStorage.removeItem(this.REFRESH_TOKEN);
  }
}
