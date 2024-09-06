import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiCurationComponent } from './ai-curation.component';

describe('AiCurationComponent', () => {
  let component: AiCurationComponent;
  let fixture: ComponentFixture<AiCurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiCurationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AiCurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
