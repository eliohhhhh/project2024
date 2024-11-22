import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-barcode-scanner',
  imports: [FormsModule,CommonModule],

  templateUrl: './barcode-scanner.component.html',
  styleUrl: './barcode-scanner.component.css'
})
export class BarcodeScannerComponent {


scanner: unknown;
scannedBarcode: string= '';
scannedItem: string | null=null;

}
