import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PayoutPayload } from '../../shared/models/payout.model';
import { PayoutBatchDetail } from '../../shared/models/payout-batch-detail.model';
import { TokenService } from '../../shared/services/token.service';

@Injectable({
  providedIn: 'root',
})
export class PayoutApiService {
  // Sandbox
  // protected apiURL: string =
  //   'https://api-m.sandbox.paypal.com/v1/payments/payouts';
  // Live
  protected apiURL = 'https://api-m.paypal.com/v1/payments/payouts';

  protected httpHeaders: HttpHeaders;
  protected authToken: string = `Bearer <access_token$sandbox$dpv5ryhzpgmp8b8d$423b0ffd06a99a1810b9452da4ce832e>`;

  constructor(private httpClient: HttpClient, private tokenSvc: TokenService) {
    this.authToken = this.tokenSvc.getToken() as string;
    this.httpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer <access_token${this.authToken}>`);
  }

  public postPaymentRequest(payload: PayoutPayload): Observable<any> {
    return this.httpClient.post<any>(`${this.apiURL}`, payload, {
      headers: this.httpHeaders,
    });
  }

  public getPayoutDetailsByBatchId(
    batchId: string,
    searchRequest: any
  ): Observable<PayoutBatchDetail> {
    const params = new HttpParams({ fromObject: searchRequest as any });
    return this.httpClient.get<PayoutBatchDetail>(
      `https://api.paypal.com/v1/payments/payouts/${batchId}`,
      { params }
    );
  }
}
