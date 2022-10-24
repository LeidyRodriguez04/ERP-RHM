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
  regexcorreo= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  regexnumero= /^[0-9]/;

  constructor(private fb: FormBuilder) {
    this.doctoresForm = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      tipoIdentificacion: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.pattern(this.regexcorreo)]],
      numeroIdentificacion: ['', [Validators.required, Validators.pattern(this.regexnumero)]],
      area: ['', [Validators.required]],
      telefono: ['', [Validators.required, Validators.pattern(this.regexnumero)]],
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
      fecha: this.doctoresForm.get('fecha')?.value,
      correo: this.doctoresForm.get('correo')?.value,
      telefono: this.doctoresForm.get('telefono')?.value,
      area: this.doctoresForm.get('area')?.value,
    }
    console.log(DOCTORES)
  }

}
