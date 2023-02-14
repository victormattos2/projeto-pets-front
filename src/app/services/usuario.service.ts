import { Usuario } from './../models/model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  apiURL=`${environment.apiURL}/usuario`;

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
  
  save(usuario){
    console.log(JSON.stringify(usuario));
    return this.http.post(this.apiURL, usuario)

  }

  
  filtrar(filtro){
    return this.http.post(`${this.apiURL}/filtrar`,filtro).toPromise().then(data => { return data; })
  }


  validarLogin(usuario: Usuario): Promise<any> {
    const headers = new HttpHeaders()
    .append('Content-Type', 'application/x-www-form-urlencoded')

    let params = new HttpParams()
      .set('login', usuario.login )
      .set('senha', usuario.senha );

    return this.http.get(`${this.apiURL}/validar`, {headers, params})
      .toPromise()
      ;


  }
}