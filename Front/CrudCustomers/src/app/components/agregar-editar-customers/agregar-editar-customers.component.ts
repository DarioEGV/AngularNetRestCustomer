import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer, CustomerType } from '../../interfaces/Customers';
import { SharedModule } from '../../shared/shared/shared.module';
import { CustomersService } from '../../services/customers.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
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
  customerTypes?: CustomerType[];
  id: number;
  title?: string;
  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private _customerService: CustomersService, private _router: Router, private aRoute: ActivatedRoute) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', Validators.required],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required],
      tipoCliente: ['', Validators.required],
    });
    // this.getCustomersType();
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
  }
  ngOnInit(): void {
    this.loading = true;

    if (this.id != 0) {
      this.title = "Editar";
      this.ObtenerCliente(this.id);
    } else this.title = "Agregar";

    this.getCustomersType();
    this.loading = false;
  }
  submit() {
    if (this.id != 0) {
      //editar
      this.editarCustomer(this.id);
    //  console.log(this.id);
    } else {
      //agregar
      this.agregarCliente();
    }
  }

  ObtenerCliente(id: number) {
    this._customerService.getCustomer(id).subscribe(data => {
      this.form.patchValue({
        nombre: data.firstName,
        apellido: data.lastName,
        telefono: data.phone,
        direccion: data.address,
        email: data.email,
      });
    });
  }

  getCustomersType() {
    this._customerService.getCustomersTypes().subscribe({
      next: (result) => {
        this.customerTypes = result;
        //console.log(result);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  obtenerClienteDeFormulario(): Customer {
    const customer: Customer = {
      firstName: this.form.value.nombre,
      lastName: this.form.value.apellido,
      email: this.form.value.email,
      phone: this.form.value.telefono,
      address: this.form.value.direccion,
      customerTypeId: this.form.value.tipoCliente,
    }
    return customer;
  }

  editarCustomer(id: number) {
    this.loading = true;
    const customer = this.obtenerClienteDeFormulario();
    customer.customerId = id;
    this._customerService.updateCustomer(id, customer).subscribe(data => {
      this.mensajeExito(2);
      this._router.navigate(['listCustomers']);
      this.loading = false;
    });
  }

  agregarCliente() {
    // const nombre=this.form.get('nombre')?.value;
    // const nombre = this.form.value.nombre;

    const customer = this.obtenerClienteDeFormulario();

    this._customerService.addCustomer(customer).subscribe(data => {
      console.log(data);
      this.mensajeExito(1);
      this._router.navigate(['listCustomers']);
    })
  }

  mensajeExito(operacion: number) {
    if (operacion == 1) {
      this._snackBar.open("El cliente agregado con exito", "", { duration: 4000 });
    }
    if (operacion == 2) {
      this._snackBar.open("El cliente editado con exito", "", { duration: 4000 });
    }
  }
}
