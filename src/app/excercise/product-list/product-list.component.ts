import { Component, OnInit } from '@angular/core';

export class ProductList{
  id?: number;
  Code: string;
  Name: string;
  Price: number;
  Colour: string;
  Size: number;
  Description: string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

 Products: ProductList = new ProductList();
 Product: ProductList[] = [
    {id: 1, Code: 'pcode1', Name: 'Maruti Suzuki', Price: 100000, Colour: 'White', Size: 12, Description: 'A quick and simplified answer.'},
    {id: 2, Code: 'pcode2', Name: 'Hyundai', Price: 100000, Colour: 'Gold', Size: 13, Description: 'A quick and simplified answer.'},
    {id: 3, Code: 'pcode3', Name: 'Fiat', Price: 100000, Colour: 'Yellow', Size: 15, Description: 'A quick and simplified answer.'},
    {id: 4, Code: 'pcode4', Name: 'Toyota', Price: 100000, Colour: 'Purple', Size: 14, Description: 'A quick and simplified answer.'},
    {id: 5, Code: 'pcode5', Name: 'Honda', Price: 100000, Colour: 'Silver', Size: 15, Description: 'A quick and simplified answer.'},
    {id: 6, Code: 'pcode6', Name: 'Chevrolet', Price: 100000, Colour: 'Beige orange', Size: 14, Description: 'A quick and simplified answer.'},
    {id: 7, Code: 'pcode7', Name: 'Skoda', Price: 100000, Colour: 'Blue', Size: 13, Description: 'A quick and simplified answer.'},
    {id: 8, Code: 'pcode8', Name: 'Mercedes-benz', Price: 100000, Colour: 'Red', Size: 12, Description: 'A quick and simplified answer.'}
  ];

constructor() {}

ngOnInit(): void {
  }

}
