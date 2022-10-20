import { Component, OnInit } from '@angular/core';
import { ContactoService } from 'src/app/services/contacto.service';
import { Contacto } from 'src/app/models/contactoModel';


@Component({
    selector: 'app-correos',
    templateUrl: './correos.component.html',
    styleUrls: ['./correos.component.css']
})
export class CorreosComponent implements OnInit {

    // variable qui s'appuie sur l'import contactoModelo et qui mettra tout dans un array
    listarCorreos: Contacto[]=[];

    constructor(private servicioContacto: ContactoService) { }

    ngOnInit(): void {

    }

    obtenerContactos() {
        this.servicioContacto.getContacto().subscribe((data) => {
            console.log(data)
            this.listarCorreos = data
        }, (error) => {
            console.log(error);
        })
    }
}

console.log();
