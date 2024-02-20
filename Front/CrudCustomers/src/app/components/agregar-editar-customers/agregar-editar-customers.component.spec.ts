import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarCustomersComponent } from './agregar-editar-customers.component';

describe('AgregarEditarCustomersComponent', () => {
  let component: AgregarEditarCustomersComponent;
  let fixture: ComponentFixture<AgregarEditarCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarEditarCustomersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarEditarCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
