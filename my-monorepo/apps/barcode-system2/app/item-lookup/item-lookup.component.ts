import { Component } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InventoryItem } from '../item.model';
@Component({
  selector: 'app-item-lookup',
  templateUrl: './item-lookup.component.html',
  styleUrls: ['./item-lookup.component.css'],
  imports:[CommonModule,FormsModule],
  standalone: true,
})
export class ItemLookupComponent {
  searchTerm: string = '';
  searchResults: InventoryItem[]=[];

  constructor(private inventoryService: InventoryService) {}

  searchItems() {
    this.searchResults = this.inventoryService.findItem(this.searchTerm) as InventoryItem[];//
  }
}