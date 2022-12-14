import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { ContactoComponent } from './components/contacto/contacto.component';
import { CorreosComponent } from './components/correos/correos.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegistrarPacienteComponent } from './components/registrar-paciente/registrar-paciente.component';


const routes: Routes = [
    {path:'', component: InicioComponent},
    {path:'ingreso', component: IngresoComponent},
    {path:'contacto', component: ContactoComponent},
    {path:'correos', component: CorreosComponent},
    {path:'dashboard', component: DashboardComponent},
    {path:'registrar-pacientes', component: RegistrarPacienteComponent},
    {path:'404',component:NotFoundComponent},
    {path:'**', redirectTo:'404', pathMatch: 'full'}, //cette ligne tjs a la fin de ce bloc

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
