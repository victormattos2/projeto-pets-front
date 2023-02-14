import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovimentacaoService {
  apiURL=`${environment.apiURL}/movimentacao`;

  constructor(private http:HttpClient) { }

  deletar(id: number){
   return this.http.delete(this.apiURL+'/'+id)
  }

  findById(id){
    return this.http.get(this.apiURL + "/" + id);
    
   }

  findall(){
   return this.http.get(this.apiURL)

  }
  
  save(movimentacao){
    console.log(JSON.stringify(movimentacao));
    return this.http.post(this.apiURL, movimentacao)

  }

  
  filtrar(filtro){
    return this.http.post(`${this.apiURL}/filtrar`,filtro).toPromise().then(data => { return data; })
  }
}