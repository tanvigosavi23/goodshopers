import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurSalesComponent } from './our-sales.component';

describe('OurSalesComponent', () => {
  let component: OurSalesComponent;
  let fixture: ComponentFixture<OurSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OurSalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
