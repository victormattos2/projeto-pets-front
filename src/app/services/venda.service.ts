import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VendaService {
  apiURL=`${environment.apiURL}/venda`;

  constructor(private http:HttpClient) { }

  findall(){
   return this.http.get(this.apiURL)

  }
  
  save(venda){
    return this.http.post(this.apiURL, venda)

  }

}
