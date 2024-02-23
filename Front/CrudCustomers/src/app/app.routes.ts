import { Routes } from '@angular/router';

import { ListarCustomersComponent } from './components/listar-customers/listar-customers.component';
import { AgregarEditarCustomersComponent } from './components/agregar-editar-customers/agregar-editar-customers.component';
import { VerCustomersComponent } from './components/ver-customers/ver-customers.component';

export const routes: Routes = [
    {path:'',redirectTo:'listCustomers',pathMatch:'full'},
    {path:'listCustomers',component:ListarCustomersComponent},
    {path:'addCustomers',component:AgregarEditarCustomersComponent},
    {path:'viewCustomers/:id',component:VerCustomersComponent},
    {path:'editCustomers/:id',component:AgregarEditarCustomersComponent},
    {path:'**',redirectTo:'listCustomers',pathMatch:'full'},
];
