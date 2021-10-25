import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportProductsComponent } from './export-products.component';

describe('ExportProductsComponent', () => {
  let component: ExportProductsComponent;
  let fixture: ComponentFixture<ExportProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
