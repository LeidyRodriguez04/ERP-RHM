import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctores } from '../models/dashboardDoctores';
import { DashboardComponent } from '../components/dashboard/dashboard.component';

@Injectable({
  providedIn: 'root'
})

export class DoctorService {

  url = 'http://localhost:4000/api/doctores/';

  constructor(private http: HttpClient) {}

  getDoctores():Observable<any>{
    return this.http.get(this.url);
  }

  deleteDoctor(id: String): Observable<any>{
    return this.http.delete(this.url + id)
  }

  postDoctor(Doctores: Doctores): Observable<any>{
    return this.http.post(this.url, Doctores);
  }

  getDoctor(id: String): Observable<any>{
    return this.http.get(this.url + id)
  }

  putDoctor(id: String, Doctores: Doctores): Observable<any>{
    return this.http.put(this.url + id, Doctores);
  }
}
