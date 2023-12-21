import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticalAiComponent } from './critical-ai.component';

describe('CriticalAiComponent', () => {
  let component: CriticalAiComponent;
  let fixture: ComponentFixture<CriticalAiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriticalAiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CriticalAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
