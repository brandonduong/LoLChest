import { Injectable } from '@angular/core';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor() { }

  async getItems(): Promise<Item[]> {
    const items = await fetch("/item")
    return items.json() ?? [];
  }
}
