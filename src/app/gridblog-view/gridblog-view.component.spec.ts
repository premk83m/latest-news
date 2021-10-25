import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridblogViewComponent } from './gridblog-view.component';

describe('GridblogViewComponent', () => {
  let component: GridblogViewComponent;
  let fixture: ComponentFixture<GridblogViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridblogViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridblogViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
