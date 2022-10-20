import { Component, OnInit } from '@angular/core';
import {FormBuilder ,FormGroup, Validators } from '@angular/forms';
import { Doctores } from 'src/app/models/dashboardDoctores';

@Component({
  selector: 'app-registrar-doctores',
  templateUrl: './registrar-doctores.component.html',
  styleUrls: ['./registrar-doctores.component.css']
})
export class RegistrarDoctoresComponent implements OnInit {

  doctoresForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.doctoresForm = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      tipoIdentificacion: ['', [Validators.required]],
      numeroIdentificacion: ['', [Validators.required]],
      genero: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      cargo: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  agregarDoctores(){
    const DOCTORES: Doctores = {
      nombre: this.doctoresForm.get('nombre')?.value,
      apellido: this.doctoresForm.get('apellido')?.value,
      tipoIdentificacion: this.doctoresForm.get('tipoIdentificacion')?.value,
      numeroIdentificacion: this.doctoresForm.get('numeroIdentificacion')?.value,
      genero: this.doctoresForm.get('genero')?.value,
      telefono: this.doctoresForm.get('telefono')?.value,
      direccion: this.doctoresForm.get('direccion')?.value,
      cargo: this.doctoresForm.get('cargo')?.value,
    }
    console.log(DOCTORES)
  }

}
