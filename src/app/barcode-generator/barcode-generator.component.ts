import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import JsBarcode from 'jsbarcode';



@Component({
  selector: 'app-barcode-generator',
  templateUrl: './barcode-generator.component.html',
  imports:[FormsModule,CommonModule],
  standalone: true, 
})
export class BarcodeGeneratorComponent {
  barcodeValue: string = '';
  showBarcode: boolean = true;

  generateBarcode() {
    this.showBarcode = true; 
    setTimeout(() => {
      JsBarcode("#barcode", this.barcodeValue, {
        format: "CODE128", 
        width: 2,
        height: 100,
        displayValue: true,
      });
    }, );
  }
}