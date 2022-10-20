import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
  
})
export class IngresoComponent implements OnInit {

  loginForm: FormGroup

  constructor(private fb: FormBuilder) {
        this.loginForm = this.fb.group({
            usuario: ['', Validators.required],
            password: ['', Validators.required],
        })
    }

  ngOnInit(): void {
    sessionStorage.setItem("correo", "admin1")
        sessionStorage.setItem("clave", "pepe123")
  }
  validarLogin() {
    let usuario_formulario = this.loginForm.get('usuario')?.value
    let clave_usuario = this.loginForm.get('password')?.value
    if (usuario_formulario == sessionStorage.getItem("correo")) {
        if (clave_usuario == sessionStorage.getItem("clave")) {
            Swal.fire({
                icon: 'success',
                title: 'Bienvenido al grupo',
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Usuario invalido',
            })
        }
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Diligenciar formulario',
        })
    }
}
}
