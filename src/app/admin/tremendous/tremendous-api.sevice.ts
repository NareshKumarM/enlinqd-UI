import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Products } from "./model/product.model";

@Injectable({
    providedIn: 'root',
})
export class TremendousApiService {
    // protected apiToken = "TEST_viNlCbjK8--BjNJcB4lgM8FKHrY03K3nGa5uaNOliCB"
    protected apiURL = 'https://enlinqdsurveymanager.azurewebsites.net/api/Rewards';
    // protected httpHeaders: HttpHeaders;

    constructor(private httpClient: HttpClient) {
        // this.httpHeaders = new HttpHeaders()
        //     .set('Content-Type', 'application/json')
        //     .set('Authorization', `Bearer ${this.apiToken}>`);
    }

    public getProducts(country: string, currency: string): Observable<Products> {
        return this.httpClient.get<Products>(`${this.apiURL}/products`, { params: { country, currency } });
    }
}