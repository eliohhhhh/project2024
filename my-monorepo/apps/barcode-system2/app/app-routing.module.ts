import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryComponent } from './inventory/inventory.component';
import { BarcodeGeneratorComponent } from './barcode-generator/barcode-generator.component';
import { BarcodeScannerComponent } from './barcode-scanner/barcode-scanner.component';
import { ItemLookupComponent } from './item-lookup/item-lookup.component';

const routes: Routes = [
  { path: 'inventory', component: InventoryComponent },
  { path: 'barcode-generator', component: BarcodeGeneratorComponent },
  { path: 'barcode-scanner', component: BarcodeScannerComponent },
  { path: 'item-lookup', component: ItemLookupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}