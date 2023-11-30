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
  bagSize: number = 1
  items: Item[] = [
    {
      name: 'B. F. Sword',
      photo: `assets/sword.webp`,
      amount: 0,
    },
    {
      name: 'Recurve Bow',
      photo: `assets/bow.webp`,
      amount: 0,
    },
    {
      name: 'Needlessly Large Rod',
      photo: `assets/rod.webp`,
      amount: 0,
    },
    {
      name: 'Tear of the Goddess',
      photo: `assets/tear.webp`,
      amount: 0,
    },
    {
      name: 'Chain Vest',
      photo: `assets/chain.webp`,
      amount: 0,
    },
    {
      name: 'Negatron Cloak',
      photo: `assets/cloak.webp`,
      amount: 0,
    },
    {
      name: 'Giant\'s Belt',
      photo: `assets/belt.webp`,
      amount: 0,
    },
    {
      name: 'Sparring Gloves',
      photo: `assets/glove.webp`,
      amount: 0,
    },
  ]

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
