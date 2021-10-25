import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalAdmissionComponent } from './hospital-admission.component';

describe('HospitalAdmissionComponent', () => {
  let component: HospitalAdmissionComponent;
  let fixture: ComponentFixture<HospitalAdmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalAdmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
