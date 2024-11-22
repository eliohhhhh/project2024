import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import JsBarcode from 'jsbarcode';

interface InventoryItem {
  name: string;
  quantity: number;
  barcodeValue: string;
}

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
  imports: [CommonModule,FormsModule],
})
export class InventoryComponent {
  items: InventoryItem[] = [];
  newItemName: string = '';
  newItemQuantity: number = 0;

  @ViewChild('barcodeCanvas', { static: false }) barcodeCanvas!: ElementRef<HTMLCanvasElement>;

  addItem() {
    const barcodeValue = this.generateBarcode(this.newItemName);
    this.items.push({ name: this.newItemName, quantity: this.newItemQuantity, barcodeValue });
    this.newItemName = '';
    this.newItemQuantity = 1;
    this.drawBarcode(barcodeValue);
  }

  generateBarcode(value: string): string {
    return value + Math.floor(Math.random() * 10000).toString();
  }

  drawBarcode(value: string) {
    if (this.barcodeCanvas) {
      JsBarcode(this.barcodeCanvas.nativeElement, value, {
        format: "CODE128",
        width: 2,
        height: 40,
        displayValue: true,
      });
    }
  }
}