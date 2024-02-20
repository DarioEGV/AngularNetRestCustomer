import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCustomersComponent } from './listar-customers.component';

describe('ListarCustomersComponent', () => {
  let component: ListarCustomersComponent;
  let fixture: ComponentFixture<ListarCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarCustomersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
