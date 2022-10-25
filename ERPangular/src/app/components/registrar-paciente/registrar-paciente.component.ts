import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { PacienteService } from "src/app/services/paciente.service";
import { Paciente } from 'src/app/models/paciente';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-registrar-paciente',
  templateUrl: './registrar-paciente.component.html',
  styleUrls: ['./registrar-paciente.component.css']
})
export class RegistrarPacienteComponent implements OnInit {
  dropdownList:any = [];
  selectedItems:any = [];
  dropdownSettings:any = {};

  pacienteForm: FormGroup;
  regexNomApe = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/;
  regexNumDocumento = /[0123456789]{1,8}/;
  regexTelefono = /\+57?[ -]*([0-9][ -]*){10}/;
  regexEdad = /[0123456789]{1,2}/;
  regexAltura = /[0123456789]{2,3}/

  constructor(private fb:FormBuilder, private servicioPaciente: PacienteService) {
    this.pacienteForm = this.fb.group({
      nombre: ['', Validators.required, Validators.pattern(this.regexNomApe)],
      apellido: ['', Validators.required, Validators.pattern(this.regexNomApe)],
      documento: ['', Validators.required],
      numDocumento: ['', Validators.required, Validators.pattern(this.regexNumDocumento)],
      telefono: ['', Validators.required, Validators.pattern(this.regexTelefono)],
      edad: ['', Validators.required, Validators.pattern(this.regexEdad)],
      altura: ['', Validators.required, Validators.pattern(this.regexAltura)],
      sintomas: ['', Validators.required]
      })
    }

  ngOnInit(): void {
    this.dropdownList = [
      { item_id: 1, item_text: 'ataque al corazón' },
      { item_id: 2, item_text: 'Quemadura grave' },
      { item_id: 3, item_text: 'Desmayo' },
      { item_id: 4, item_text: 'Dolor de cabeza' },
      { item_id: 5, item_text: 'Herida profunda' },
      { item_id: 6, item_text: 'Dolor' },
      { item_id: 7, item_text: 'Fiebre alta' },
      { item_id: 5, item_text: 'Mareos' },
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 5,
      allowSearchFilter: true
    }
  }
  agregarPaciente(){
    const PACIENTE:Paciente ={
      nombre: this.pacienteForm.get('nombre')?.value,
      apellido: this.pacienteForm.get('apellido')?.value,
      documento: this.pacienteForm.get('documento')?.value,
      numDocumento: this.pacienteForm.get('numDocumento')?.value,
      telefono: this.pacienteForm.get('telefono')?.value,
      edad: this.pacienteForm.get('edad')?.value,
      altura: this.pacienteForm.get('altura')?.value,
      sintomas: this.pacienteForm.get('sintomas')?.value,
    }
    console.log(PACIENTE)
    this.servicioPaciente.postPaciente(PACIENTE).subscribe(()=> {
      Swal.fire({
        icon: 'success',
        title: 'Paciente registrado',
      })
    }, (error) => {
      console.log(error)
    })  
  }
}
