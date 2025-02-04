import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Products } from "./model/product.model";
import { Order, Orders } from "./model/order.model";
import { OrderRequest } from "./model/request.model";

@Injectable({
    providedIn: 'root',
})
export class TremendousApiService {
    protected apiURL = 'https://enlinqdsurveymanager.azurewebsites.net/api';

    constructor(private httpClient: HttpClient) { }

    public getProducts(country: string, currency: string): Observable<Products> {
        return this.httpClient.get<Products>(`${this.apiURL}/products/products`, { params: { country, currency } });
    }

    public getOrders(): Observable<Orders> {
        return this.httpClient.get<Orders>(`${this.apiURL}/order/orders`);
    }

    public createOrder(order: OrderRequest): Observable<Order> {
        return this.httpClient.post<Order>(`${this.apiURL}/order/create`, order);
    }
}