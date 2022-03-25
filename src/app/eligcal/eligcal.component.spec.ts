import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EligcalComponent } from './eligcal.component';

describe('EligcalComponent', () => {
  let component: EligcalComponent;
  let fixture: ComponentFixture<EligcalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EligcalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EligcalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
