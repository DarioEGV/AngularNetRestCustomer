import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared/shared.module';

@Component({
  selector: 'app-ver-customers',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './ver-customers.component.html',
  styleUrl: './ver-customers.component.css'
})
export class VerCustomersComponent {

}
