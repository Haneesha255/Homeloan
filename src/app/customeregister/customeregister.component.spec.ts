import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeregisterComponent } from './customeregister.component';

describe('CustomeregisterComponent', () => {
  let component: CustomeregisterComponent;
  let fixture: ComponentFixture<CustomeregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomeregisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomeregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
