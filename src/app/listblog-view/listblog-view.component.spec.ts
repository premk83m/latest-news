import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListblogViewComponent } from './listblog-view.component';

describe('ListblogViewComponent', () => {
  let component: ListblogViewComponent;
  let fixture: ComponentFixture<ListblogViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListblogViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListblogViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
