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
  items: InventoryItem[] = [];  // array of inventory items objects repersents the items of the inventory
  newItemName: string = '';
  newItemQuantity: number = 0;

  // reference to the HTML canvas element where barcode will be drawn when clicked.
  @ViewChild('barcodeCanvas', { static: false }) barcodeCanvas!: ElementRef<HTMLCanvasElement>;

  //This method is called when a user clicks the "Add Item" button as defined in your previous HTML code.
  addItem() {
    const barcodeValue = this.generateBarcode(this.newItemName);
    this.items.push({ name: this.newItemName, quantity: this.newItemQuantity, barcodeValue });
    this.newItemName = '';
    this.newItemQuantity = 0;
    this.drawBarcode(barcodeValue);
  }

  // This method takes a string input (value) and generates a unique barcode value by appending a random number between 0 and 9999 to it.
  generateBarcode(value: string): string {
    return value + Math.floor(Math.random() * 10000).toString();
  }

//This method takes a barcode value as input and uses it to render a barcode on the canvas.
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