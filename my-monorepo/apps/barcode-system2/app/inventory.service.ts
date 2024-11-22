import { Injectable } from '@angular/core';

interface InventoryItem {
  name: string;
  quantity: number;
  barcodeValue: string;
}

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private items: InventoryItem[] = [
    { name: 'Item A', quantity: 10, barcodeValue: 'ITEMA1234' },
    { name: 'Item B', quantity: 5, barcodeValue: 'ITEMB5678' },
    { name: 'Item C', quantity: 20, barcodeValue: 'ITEMC9012' }
  ];

  constructor() {}

  getItems() {
    return this.items;
  }

  findItem(searchTerm: string): InventoryItem[] {
    return this.items.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.barcodeValue.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}