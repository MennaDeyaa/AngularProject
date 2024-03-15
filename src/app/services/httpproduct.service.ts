import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpproductService {
  constructor(private http: HttpClient) {}
  GetAll(): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(`${environment.baseUrl}/products`);
  }
  GetProductbyId(id: number | undefined): Observable<Iproduct> {
    return this.http.get<Iproduct>(`${environment.baseUrl}/products/${id}`);
  }
  GetProductByCategory(catid: number): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(
      `${environment.baseUrl}/products?categoryID=${catid}`
    );
  }
  AddProduct(product: Iproduct) {
    return this.http.post<Iproduct[]>(
      `${environment.baseUrl}/products`,
      product
    );
  }
}
