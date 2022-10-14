import { Component, OnInit } from '@angular/core';
import {FormBuilder ,FormGroup, Validators } from '@angular/forms';
import { Personal } from 'src/app/models/personal';

@Component({
  selector: 'app-registro-personal',
  templateUrl: './registro-personal.component.html',
  styleUrls: ['./registro-personal.component.css']
})
export class RegistroPersonalComponent implements OnInit {

  personalForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.personalForm = this.fb.group({
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

  agregarPersonal(){
    const PERSONAL: Personal = {
      nombre: this.personalForm.get('nombre')?.value,
      apellido: this.personalForm.get('apellido')?.value,
      tipoIdentificacion: this.personalForm.get('tipoIdentificacion')?.value,
      numeroIdentificacion: this.personalForm.get('numeroIdentificacion')?.value,
      genero: this.personalForm.get('genero')?.value,
      telefono: this.personalForm.get('telefono')?.value,
      direccion: this.personalForm.get('direccion')?.value,
      cargo: this.personalForm.get('cargo')?.value,
    }
    console.log(PERSONAL)
  }

}
