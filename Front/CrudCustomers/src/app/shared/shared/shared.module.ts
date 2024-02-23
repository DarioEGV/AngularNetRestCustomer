import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from "@angular/material/sort";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card'; 
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';

import { SpinnerComponent } from '../spinner/spinner.component';

import { RouterLink } from '@angular/router';
import { NgxMaskDirective } from 'ngx-mask';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,MatTableModule,MatPaginatorModule,MatSortModule,MatFormFieldModule,MatInputModule,MatIconModule,MatTooltipModule,MatButtonModule,RouterLink,MatSnackBarModule,SpinnerComponent,MatGridListModule,NgxMaskDirective,MatSelectModule,ReactiveFormsModule
  ],
  exports: [
    MatTableModule,MatPaginatorModule,MatSortModule,MatFormFieldModule,MatInputModule,MatIconModule,MatTooltipModule,MatButtonModule,MatCardModule,RouterLink,MatSnackBarModule,SpinnerComponent,MatGridListModule,NgxMaskDirective,MatSelectModule,ReactiveFormsModule
  ]
})
export class SharedModule { 

}
