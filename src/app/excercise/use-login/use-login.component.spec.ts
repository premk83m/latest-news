import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseLoginComponent } from './use-login.component';

describe('UseLoginComponent', () => {
  let component: UseLoginComponent;
  let fixture: ComponentFixture<UseLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
