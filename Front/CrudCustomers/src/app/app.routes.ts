import { Routes } from '@angular/router';

import { ListarCustomersComponent } from './components/listar-customers/listar-customers.component';
import { AgregarEditarCustomersComponent } from './components/agregar-editar-customers/agregar-editar-customers.component';
import { VerCustomersComponent } from './components/ver-customers/ver-customers.component';

export const routes: Routes = [
    {path:'listCustomers',component:ListarCustomersComponent},
    {path:'addCustomers',component:AgregarEditarCustomersComponent},
    {path:'viewCustomers',component:VerCustomersComponent}
];
