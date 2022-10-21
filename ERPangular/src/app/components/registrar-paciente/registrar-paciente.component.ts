import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registrar-paciente',
  templateUrl: './registrar-paciente.component.html',
  styleUrls: ['./registrar-paciente.component.css']
})
export class RegistrarPacienteComponent implements OnInit {
  dropdownList:any = [];
  selectedItems:any = [];
  dropdownSettings:any = {};

  pacienteForm: FormGroup
  regexNomApe = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/
  regexNumDocumento = /[0123456789]{1,8}/
  regexEdad = /[0123456789]{1,2}/
  regexAltura = /[0123456789]{2,3}/

  constructor(private fb:FormBuilder) {
    this.pacienteForm = this.fb.group({
      nombre: ['', Validators.required, Validators.pattern(this.regexNomApe)],
      apellido: ['', Validators.required, Validators.pattern(this.regexNomApe)],
      documento: ['', Validators.required],
      numDocumento: ['', Validators.required, Validators.pattern(this.regexNumDocumento)],
      edad: ['', Validators.required, Validators.pattern(this.regexEdad)],
      altura: ['', Validators.required, Validators.pattern(this.regexAltura)],
      sintomas: ['', Validators.required],
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
    };
  }
}
