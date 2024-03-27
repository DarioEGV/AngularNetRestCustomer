import { Component, numberAttribute } from '@angular/core';
import { SharedModule } from '../../shared/shared/shared.module';
import { Customer } from '../../interfaces/Customers';

import { CustomersService } from '../../services/customers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-customers',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './ver-customers.component.html',
  styleUrl: './ver-customers.component.css'
})
export class VerCustomersComponent {
  
   customer?:Customer;
   loading:boolean=true;
   id!:number;
  constructor(private _customerService:CustomersService,private aRoute:ActivatedRoute) {
   this.id=Number(this.aRoute.snapshot.paramMap.get('id'));
  }
  ngOnInit():void{
    this.getCustomer(this.id);
  }
  
  getCustomer(id:number){

      this._customerService.getCustomer(id).subscribe({
      next:(result)=>{
        this.customer=result;
        console.log(result);
    }  ,
      error:(err)=>{
        console.log(err);
      },
      complete:()=>{       
        this.loading= false;
      }
      });
    
   }
     
  

}
