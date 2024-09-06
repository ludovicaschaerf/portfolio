import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtAuthenticationComponent } from './art-authentication.component';

describe('ArtAuthenticationComponent', () => {
  let component: ArtAuthenticationComponent;
  let fixture: ComponentFixture<ArtAuthenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtAuthenticationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
