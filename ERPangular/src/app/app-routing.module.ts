import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { ContactoComponent } from './components/contacto/contacto.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListarPersonalComponent } from './components/listar-personal/listar-personal.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegistroPersonalComponent } from './components/registro-personal/registro-personal.component';



const routes: Routes = [
    {path:'', component: InicioComponent},
    {path:'ingreso', component: IngresoComponent},
    {path:'contacto', component: ContactoComponent},
    {path:'listar-personal', component: ListarPersonalComponent},
    {path:'registro-personal', component: RegistroPersonalComponent},
    {path:'404',component:NotFoundComponent},
    {path:'**', redirectTo:'404', pathMatch: 'full'}, //cette ligne tjs a la fin de ce bloc

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
