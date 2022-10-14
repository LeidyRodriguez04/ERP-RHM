import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { ContactoComponent } from './components/contacto/contacto.component';
import { ListarContactosComponent } from './components/listar-contactos/listar-contactos.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
    {path:'', component: InicioComponent},
    {path:'ingreso', component: IngresoComponent},
    {path:'contacto', component: ContactoComponent},
    {path: 'listar-contactos', component: ListarContactosComponent},
    {path:'404',component:NotFoundComponent},
    {path:'**', redirectTo:'404', pathMatch: 'full'}, //cette ligne tjs a la fin de ce bloc

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
