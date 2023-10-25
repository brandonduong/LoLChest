import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputNumberModule } from 'primeng/inputnumber'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule, InputNumberModule, FormsModule],
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  value3: number = 10
}
