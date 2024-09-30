import { Component } from '@angular/core';
import { OrderdetailComponent } from '../orderdetail/orderdetail.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [OrderdetailComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

}
