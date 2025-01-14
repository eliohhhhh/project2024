import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemLookupComponent } from './item-lookup.component';

describe('ItemLookupComponent', () => {
  let component: ItemLookupComponent;
  let fixture: ComponentFixture<ItemLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemLookupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
