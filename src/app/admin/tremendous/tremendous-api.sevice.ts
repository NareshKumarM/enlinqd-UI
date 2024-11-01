import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class TremendousApiService {
    protected apiToken = "TEST_viNlCbjK8--BjNJcB4lgM8FKHrY03K3nGa5uaNOliCB"
    protected apiURL = 'https://testflight.tremendous.com/api/v2';
    protected httpHeaders: HttpHeaders;

    constructor(private httpClient: HttpClient) {
        this.httpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Authorization', `Bearer ${this.apiToken}>`);
    }

    public getProducts(): Observable<any> {
        return this.httpClient.get<any>(`${this.apiURL}`, {
            headers: this.httpHeaders,
        });
    }
}