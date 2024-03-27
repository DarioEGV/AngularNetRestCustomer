import {AfterViewInit, Component, ViewChild,OnInit} from '@angular/core';

import {MatSnackBar} from '@angular/material/snack-bar';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from "@angular/material/sort";

import { Customer,CustomerType ,responseGET} from '../../interfaces/Customers';
import { SharedModule } from '../../shared/shared/shared.module';
import { CustomersService } from '../../services/customers.service';
import {DataSource} from '@angular/cdk/collections';

  
@Component({
  selector: 'app-listar-customers',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './listar-customers.component.html',
  styleUrl: './listar-customers.component.css'
})


export class ListarCustomersComponent implements AfterViewInit {
  
  data?:responseGET;

  displayedColumns: string[] = ['CustomerID', 'FirstName', 'LastName', 'Email','Phone','Address','CustomerType','Acciones'];
  dataSource = new MatTableDataSource<Customer>();
  loading: boolean= true;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
constructor(private _snackBar: MatSnackBar,private _customerService:CustomersService){

}
ngOnInit():void{
  this.getCustomers();
 
}

getCustomers(){
  this._customerService.getCustomersResponse().subscribe({
  next:(result)=>{
    this.data=result;
    this.dataSource.data = this.data.response;
     //console.log(this.data.response);  
}  ,
  error:(err)=>{
    console.log(err);
  },
  complete:()=>{
    
    this.loading= false;
  }
  });
}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    if(this.dataSource.data.length>0){
    this.paginator._intl.itemsPerPageLabel="Items por pagina";
  }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  deleteCustomer(id:number){
      this.loading=true;
      this._customerService.deleteCustomer(id).subscribe(()=>{
      this.mensajeExito();
      this.loading=false; 
      this.getCustomers();
      });
     // setTimeout(() => {  this.loading=false; }, 2000);
  }

  mensajeExito(){
    this._snackBar.open("El cliente fue eliminado con exito","",{duration:4000}); 
  }
      

}
