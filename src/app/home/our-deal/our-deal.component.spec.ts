import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurDealComponent } from './our-deal.component';

describe('OurDealComponent', () => {
  let component: OurDealComponent;
  let fixture: ComponentFixture<OurDealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OurDealComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurDealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
