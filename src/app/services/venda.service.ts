import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VendaService {
  apiURL=`${environment.apiURL}/pedido`;

  constructor(private http:HttpClient) { }

  findall(){
   return this.http.get(this.apiURL+"/lista-order-desc")

  }

  findById(id){
    return this.http.get(this.apiURL + "/" + id);
 
   }
  
  save(venda){
    return this.http.post(this.apiURL, venda)

  }

  deletar(id: number){
    return this.http.delete(this.apiURL+'/'+id)
  }
  
  filtrar(filtro){
    return this.http.post(`${this.apiURL}/filtrar`,filtro).toPromise().then(data => { return data; })
  }

  
  relatorioPDF(): Promise<any> {
    
   

    return this.http.get(`${this.apiURL}/registro-pdf`, { 
        responseType: 'blob'})
      .toPromise()
      ;


  }


}
