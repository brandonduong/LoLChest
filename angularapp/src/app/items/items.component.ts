import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
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
  bagSize: number = 1
  items: Item[] = []

  constructor(http: HttpClient) {
    http.get<Item[]>('/item').subscribe(result => {
      this.items = result.map((i) => { return { name: i.name, photo: `assets/${i.photo}.webp`, amount: 0 } });
    }, error => console.error(error));
  }

  increaseBagSize() {
    this.bagSize += 1
  }

  decreaseBagSize() {
    this.bagSize -= 1

    // Ensure all amounts are not > bagSize
    this.items = this.items.map((item) => {
      if (item.amount > this.bagSize) {
        return { ...item, amount: this.bagSize }
      }
      return { ...item }
    })
  }

  reset() {
    this.bagSize = 1;
    this.items = this.items.map((item) => {
      return {...item,  amount: 0}
    })
  }

  totalItemsLeft() {
    return (this.bagSize * 8) - this.items.reduce((a, b) => a + b.amount, 0)
  }

  dropChance(amount:number) {
    return parseFloat(((this.bagSize - amount) / this.totalItemsLeft() * 100).toFixed(2))
  }

  dropChanceStyle(chance:number) {
    if (chance >= 25) {
      return 'text-green-500'
    } else if (chance >= 20) {
      return 'text-green-700'
    } else if (chance >= 15) {
      return 'text-green-900'
    } else if (chance <= 0) {
      return 'text-red-500'
    } else if (chance <= 5) {
      return 'text-red-700'
    } else if (chance <= 10) {
      return 'text-red-900'
    }
    return ''
  }
}
