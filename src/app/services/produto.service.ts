import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  apiURL=`${environment.apiURL}/produto`;

  constructor(private http:HttpClient) { }

  findall(){
   return this.http.get(this.apiURL)

  }
  
  save(produto){
    return this.http.post(this.apiURL, produto)

  }
}
