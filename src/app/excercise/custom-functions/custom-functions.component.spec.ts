import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFunctionsComponent } from './custom-functions.component';

describe('CustomFunctionsComponent', () => {
  let component: CustomFunctionsComponent;
  let fixture: ComponentFixture<CustomFunctionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomFunctionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
