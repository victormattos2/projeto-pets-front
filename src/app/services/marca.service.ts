import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {
  apiURL=`${environment.apiURL}/marca`;

  constructor(private http:HttpClient) { }

  findall(){
   return this.http.get(this.apiURL)

  }
   
  findById(id){
    return this.http.get(this.apiURL + "/" + id);
 
   }
  
  save(marca){
    return this.http.post(this.apiURL, marca)

  }
  filtrar(filtro){
    return this.http.post(`${this.apiURL}/filtrar`,filtro).toPromise().then(data => { return data; })
  }
  
  deletar(id: number){
    return this.http.delete(this.apiURL+'/'+id)
   }
}
