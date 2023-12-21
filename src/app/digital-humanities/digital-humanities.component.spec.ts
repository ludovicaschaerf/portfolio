import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalHumanitiesComponent } from './digital-humanities.component';

describe('DigitalHumanitiesComponent', () => {
  let component: DigitalHumanitiesComponent;
  let fixture: ComponentFixture<DigitalHumanitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigitalHumanitiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DigitalHumanitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
