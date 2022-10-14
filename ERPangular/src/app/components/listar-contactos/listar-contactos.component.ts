import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/models/contactoModel';
import { ContactoService } from 'src/app/services/contacto.service';



@Component({
  selector: 'app-listar-contactos',
  templateUrl: './listar-contactos.component.html',
  styleUrls: ['./listar-contactos.component.css']
})
export class ListarContactosComponent implements OnInit {

  listaCorreos: Contacto[]= [];

  constructor(private servicioContacto: ContactoService ){ }

  ngOnInit(): void {
    console.log('pepes')
    this.obtenerCorreoClientes()
  }

  obtenerCorreoClientes(){
    this.servicioContacto.getContactos().subscribe((data) => {
      
      console.log(data);
      this.listaCorreos = data
    }, (error)=>{
      console.log(error);
    })
  }
}
