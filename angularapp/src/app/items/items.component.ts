import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from '../item';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule, ItemComponent],
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  items: Item[] = [
    {
      name: 'B. F. Sword',
      photo: `assets/sword.webp`,
    },
    {
      name: 'Recurve Bow',
      photo: `assets/bow.webp`,
    },
    {
      name: 'Needlessly Large Rod',
      photo: `assets/rod.webp`,
    },
    {
      name: 'B. F. Sword',
      photo: `assets/sword.webp`,
    },
    {
      name: 'Recurve Bow',
      photo: `assets/bow.webp`,
    },
    {
      name: 'Needlessly Large Rod',
      photo: `assets/rod.webp`,
    },
    {
      name: 'B. F. Sword',
      photo: `assets/sword.webp`,
    },
    {
      name: 'Recurve Bow',
      photo: `assets/bow.webp`,
    },
  ]
}
