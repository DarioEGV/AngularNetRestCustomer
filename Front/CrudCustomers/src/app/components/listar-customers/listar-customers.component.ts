import {AfterViewInit, Component, ViewChild} from '@angular/core';

import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from "@angular/material/sort";

import { Customers } from '../../interfaces/Customers';
import { SharedModule } from '../../shared/shared/shared.module';




const Customers_List: Customers[] = [
  
{CustomerID:1,FirstName:"Dario",LastName:"Gerez",Email:"gerezdario@gmail.com",Phone:"152984722",Address:"tucuman 854",CustomerType:"Premium"},
{CustomerID:2,FirstName:"Emilia",LastName:"Pintos",Email:"EmiPintos@gmail.com",Phone:"178346722",Address:"salta 069",CustomerType:"VIP"},
{CustomerID:3,FirstName:"Julio",LastName:"Giana",Email:"JulioGiana@gmail.com",Phone:"163498277",Address:"bs as 153",CustomerType:"Regular"},
{CustomerID:4,FirstName:"Sergio",LastName:"Velazquez",Email:"sergioVelazquez@gmail.com",Phone:"156782366",Address:"colombia 12",CustomerType:"VIP"},
{CustomerID:5,FirstName:"Maria",LastName:"Berna",Email:"mariaberna@gmail.com",Phone:"157893055",Address:"rosario 54",CustomerType:"VIP"},
{CustomerID:6,FirstName:"Murcio",LastName:"Dominguez",Email:"Murcio@gmail.com",Phone:"189372677",Address:"metan 674",CustomerType:"Regular"},
{CustomerID:7,FirstName:"Juana",LastName:"Bustamante",Email:"Juana@gmail.com",Phone:"153487209",Address:"tafi viejo 327",CustomerType:"Premium"},
{CustomerID:8,FirstName:"Marta",LastName:"Gonzales",Email:"Marta@gmail.com",Phone:"152873644",Address:"chubut 890",CustomerType:"VIP"},
{CustomerID:9,FirstName:"Leo",LastName:"Roquez",Email:"Leo@gmail.com",Phone:"156398743",Address:"peru 235",CustomerType:"Premium"},
{CustomerID:10,FirstName:"Gustavo",LastName:"Perez",Email:"Gustavo@gmail.com",Phone:"167349388",Address:"brasil 231",CustomerType:"Regular"},

];

@Component({
  selector: 'app-listar-customers',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './listar-customers.component.html',
  styleUrl: './listar-customers.component.css'
})
export class ListarCustomersComponent implements AfterViewInit {
  displayedColumns: string[] = ['CustomerID', 'FirstName', 'LastName', 'Email','Phone','Address','CustomerType','Acciones'];
  dataSource = new MatTableDataSource<Customers>(Customers_List);
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel="Items por pagina";
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
