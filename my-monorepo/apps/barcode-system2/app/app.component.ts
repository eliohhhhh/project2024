import { Component } from '@angular/core';
import { BarcodeGeneratorComponent } from "./barcode-generator/barcode-generator.component";
import { BarcodeScannerComponent } from "./barcode-scanner/barcode-scanner.component";
import { InventoryComponent } from "./inventory/inventory.component";
import { ItemLookupComponent } from "./item-lookup/item-lookup.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [BarcodeScannerComponent, BarcodeGeneratorComponent, InventoryComponent, ItemLookupComponent],
  
  
})
export class AppComponent {}
