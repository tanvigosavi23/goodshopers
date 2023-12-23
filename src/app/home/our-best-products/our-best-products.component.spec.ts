import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurBestProductsComponent } from './our-best-products.component';

describe('OurBestProductsComponent', () => {
  let component: OurBestProductsComponent;
  let fixture: ComponentFixture<OurBestProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OurBestProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurBestProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
