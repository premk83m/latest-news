import { Component, OnInit } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { ExportProd } from '../data-model/product-data.model';
import {ExpProductService} from '../services/exp-product.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-export-products',
  templateUrl: './export-products.component.html',
  styleUrls: ['./export-products.component.css']
})
export class ExportProductsComponent implements OnInit {

  expproduct: ExportProd[];
  product: ExportProd = new ExportProd();

     isEdit: boolean = false;

  constructor(private expprodservice: ExpProductService, private title: Title) { }

  ngOnInit(): void {
    this.getourProduct();
  }
  onSubmit(form: NgForm) {
  if (!this.isEdit){
     this.expprodservice.productCreate(form.value)
    .subscribe((product) =>
      {
         this.product = product;
        // form.resetForm();
         this.getourProduct();
      });
    }
    else{
      this.expprodservice.productUpdate(form.value)
      .subscribe((data) =>
        {
          this.product = data;
          console.log(this.product);
          form.resetForm();
          this.getourProduct();
        });
    }
  }
  getourProduct() {
    this.expprodservice.getExportProduct()
    .subscribe((data) =>
      {
      this.expproduct = data;
    });
  }
  edit(product: ExportProd): void {
    this.isEdit = true;
    this.expprodservice.getProductId(product.id)
    .subscribe((data) =>
      {
      this.product = data;
    });
  }
  delete(product: ExportProd): void {
    this.expprodservice.deleteProductId(product.id)
    .subscribe((data) =>
      {
      this.product = data;
      this.getourProduct();
    });
  }

}
