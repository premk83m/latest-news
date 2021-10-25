import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildinFunctionsComponent } from './buildin-functions.component';

describe('BuildinFunctionsComponent', () => {
  let component: BuildinFunctionsComponent;
  let fixture: ComponentFixture<BuildinFunctionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildinFunctionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildinFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
