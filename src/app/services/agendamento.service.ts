import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

 apiURL=`${environment.apiURL}/agendamento`;

  constructor(private http:HttpClient) { }

  findall(){
   return this.http.get(this.apiURL)

  }

  findById(id){
    return this.http.get(this.apiURL + "/" + id);
 
   }
  
  save(agendamento){
    return this.http.post(this.apiURL, agendamento)

  }

  filtrar(filtro){
    return this.http.post(`${this.apiURL}/filtrar`,filtro).toPromise().then(data => { return data; })
  }

  deletar(id: number){
    return this.http.delete(this.apiURL+'/'+id)
   }
}
