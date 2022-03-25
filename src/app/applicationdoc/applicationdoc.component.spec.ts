import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationdocComponent } from './applicationdoc.component';

describe('ApplicationdocComponent', () => {
  let component: ApplicationdocComponent;
  let fixture: ComponentFixture<ApplicationdocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationdocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationdocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
