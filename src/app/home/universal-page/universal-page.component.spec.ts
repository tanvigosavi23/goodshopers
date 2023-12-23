import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversalPageComponent } from './universal-page.component';

describe('UniversalPageComponent', () => {
  let component: UniversalPageComponent;
  let fixture: ComponentFixture<UniversalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UniversalPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UniversalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
