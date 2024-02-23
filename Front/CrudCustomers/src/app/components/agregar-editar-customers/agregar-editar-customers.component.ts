import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customers,CustomersAdd } from '../../interfaces/Customers';
import { SharedModule } from '../../shared/shared/shared.module';
@Component({
  selector: 'app-agregar-editar-customers',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './agregar-editar-customers.component.html',
  styleUrl: './agregar-editar-customers.component.css'
})
export class AgregarEditarCustomersComponent {
  loading: boolean = false;
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', Validators.required],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required],
      tipoCliente: ['', Validators.required],
    });
  }

  agregarCliente() {
    // const nombre=this.form.get('nombre')?.value;
   // const nombre = this.form.value.nombre;

    const customers: CustomersAdd = {
      FirstName: this.form.value.nombre,
      LastName: this.form.value.apellido,
      Email: this.form.value.email,
      Phone: this.form.value.telefono,
      Address: this.form.value.direccion,
      CustomerTypeID: this.form.value.tipoCliente,
    }
  }
}
