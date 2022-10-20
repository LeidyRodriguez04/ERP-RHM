import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactoService {

    url = 'http://localhost:4000/api'

  constructor(private http:HttpClient) { }

  getContacto():Observable<any>{
    return this.http.get(`${this.url}/contacto`)
  }
}
