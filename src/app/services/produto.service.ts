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

  findById(id){
    return this.http.get(this.apiURL + "/" + id);
 
   }
  
  save(produto){
    return this.http.post(this.apiURL, produto)

  }

  filtrar(filtro){
    return this.http.post(`${this.apiURL}/filtrar`,filtro).toPromise().then(data => { return data; })
  }

  filtrarmaiorqzero(filtro){
    return this.http.post(`${this.apiURL}/filtrarmaiorqzero`,filtro).toPromise().then(data => { return data; })
  }

 deletar(id: number){
   return this.http.delete(this.apiURL+'/'+id)
  }

  
  relatorioPDF(): Promise<any> {
    
   

    return this.http.get(`${this.apiURL}/relatorio-pdf`, { 
        responseType: 'blob'})
      .toPromise()
      ;


  }
  
}
