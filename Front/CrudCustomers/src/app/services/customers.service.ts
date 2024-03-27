import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer,responseGET,CustomerType} from '../interfaces/Customers';
import { CssSelector } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class CustomersService {

Myurl:string="https://localhost:7204/";


  constructor(private http:HttpClient) { }

  getCustomers():Observable<Customer[]>{
   return this.http.get<Customer[]>(this.Myurl+"api/Customers/CustomersList");
  }
  getCustomersTypes():Observable<CustomerType[]>{
    return this.http.get<CustomerType[]>(this.Myurl+"api/Customers/CustomersTypeList");
   }
  getCustomersResponse():Observable<responseGET>{
    return this.http.get<responseGET>(this.Myurl+"api/Customers/CustomersList");
  }
  getCustomer(id:number):Observable<Customer>{
    return this.http.get<Customer>(this.Myurl+"api/Customers/Customer/"+id);
  }
  deleteCustomer(id:number):Observable<void>{
    return this.http.delete<void>(this.Myurl+"api/Customers/DeleteCustomer/"+id);
  }
  addCustomer(customer: Customer):Observable<Customer>{
    return this.http.post<Customer>(this.Myurl+"api/Customers/Customer/Post/",customer);
  }
  updateCustomer(id:number,customer:Customer):Observable<void>{
    return this.http.put<void>(this.Myurl+"api/Customers/ModifyCustomer/"+id,customer);
  }
}
