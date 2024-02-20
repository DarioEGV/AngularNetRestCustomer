import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCustomersComponent } from './ver-customers.component';

describe('VerCustomersComponent', () => {
  let component: VerCustomersComponent;
  let fixture: ComponentFixture<VerCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerCustomersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
