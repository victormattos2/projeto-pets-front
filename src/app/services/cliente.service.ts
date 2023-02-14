import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  
  apiURL=`${environment.apiURL}/cliente`;

  constructor(private http:HttpClient) { }

  deletar(id: number){
   return this.http.delete(this.apiURL+'/'+id)
  }

  findall(){
   return this.http.get(this.apiURL)

  }
  
  findById(id){
    return this.http.get(this.apiURL + "/" + id);
 
   }
  
  save(cliente){
    console.log(JSON.stringify(cliente));
    return this.http.post(this.apiURL, cliente)

  }

  filtrar(filtro){
    return this.http.post(`${this.apiURL}/filtrar`,filtro).toPromise().then(data => { return data; })
  }

  relatorioPDF(): Promise<any> {
    
   

    return this.http.get(`${this.apiURL}/relatorio-pdf`, { 
        responseType: 'blob'})
      .toPromise()
      ;


  }
  
}
