import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PetsService {
  apiURL=`${environment.apiURL}/pets`;

  constructor(private http:HttpClient) { }

  findall(){
   return this.http.get(this.apiURL)

  }
  
  save(pets){
    return this.http.post(this.apiURL, pets)

  }
}
