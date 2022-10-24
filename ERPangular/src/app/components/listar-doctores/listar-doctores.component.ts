import { Component, OnInit } from '@angular/core';
import { Doctores } from 'src/app/models/dashboardDoctores';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-listar-doctores',
  templateUrl: './listar-doctores.component.html',
  styleUrls: ['./listar-doctores.component.css']
})
export class ListarDoctoresComponent implements OnInit {

  listarDoctores: Doctores[] =[];

  constructor(private servicioDoctor: DoctorService) { }
  
  ngOnInit(): void {
    this.obtenerDoctor()
  }

  obtenerDoctor(){
    this.servicioDoctor.getDoctor().subscribe((data)=>{
      console.log(data)
      this.listarDoctores = data
    }, (error)=>{
      console.log(error)
    })
  }

}
