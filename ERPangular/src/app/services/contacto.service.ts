import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from "rxjs"; // pour créer une petition asynchrone



@Injectable({
  providedIn: 'root'


})
export class ContactoService {
 
  url = 'http://localhost:4000/api'


  constructor(private http:HttpClient) { // privé car on cherche juste a consumé la "api".
  }
  getContactos(): Observable<any>{
    return this.http.get(`${this.url}/contacto`)
  }

}

