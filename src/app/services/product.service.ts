import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  Api_URL : string = 'https://mp32447456c53989e820.free.beeceptor.com/products';
  constructor(private httpClient: HttpClient)
  {  }

  getProduct(): Observable<any>
  {
    return this.httpClient.get(this.Api_URL).pipe(res => res);
  }
}
