import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Invoice } from '../models/invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  addInvoices(invoices): Observable<Invoice> {
    return this.http.post<Invoice>(this.baseUrl + '/invoices', invoices);
  }

  updateInvoices(invoices): Observable<Invoice> {
    return this.http.put<Invoice>(`${this.baseUrl}/invoices/${invoices.id}`, invoices);
  }

  getInvoices(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(this.baseUrl + '/invoices');
  }

  getInvoicesById(id: number): Observable<Invoice> {
    return this.http.get<Invoice>(`${this.baseUrl}/invoices/${id}`);
  }
}
