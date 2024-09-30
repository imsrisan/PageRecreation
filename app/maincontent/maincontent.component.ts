import { Component } from '@angular/core';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-maincontent',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './maincontent.component.html',
  styleUrl: './maincontent.component.css'
})
export class MaincontentComponent {

}
