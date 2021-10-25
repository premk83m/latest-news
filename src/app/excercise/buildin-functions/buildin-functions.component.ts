import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buildin-functions',
  templateUrl: './buildin-functions.component.html',
  styleUrls: ['./buildin-functions.component.css']
})
export class BuildinFunctionsComponent implements OnInit {
  strnum = '42961237.2345';
  strtonum: number;
  typeof: any;
  toexpo: any;
  todecimal: any;
  numformat: any;
  // Program 7
  flower: any[] = ['Jasmine', 'Lily', 'Rose', 'Lotus', 'Hibiscus', 'Kurinji', 'Marigold', 'Sunflower', 'Zinnia', 'Oleander', 'Periwinkle', 'Frangipani', 'Dahlia', 'Datura' ];
  vechicle: any[] = ['Car', 'Ambulance', 'Bicycle', 'Boat', 'Bus', 'Jet', 'Helicopter', 'Lorry', 'Train', 'Jeep', 'Truck', 'Aeroplane', 'Canoe', 'Ship'];


  arrayconc: any[] = [];
  revArray: any[] = [];
  fstlastIndex: any[] = [];
  reverseval: any[] = [];
  lessthan4: any[] = [];
  sort: any;
  ascending: any;
  descending: any;
  add4elements: any;
  rem2elements: any;
  constructor() { }

  ngOnInit(): void {
    // Program 6
    this.numberConversion();

    // Program 7
    this.arrayResults();
  }
  // Program 6
  numberConversion(): void{
    this.strtonum = Number(this.strnum);
    this.typeof = typeof(this.strtonum);

    this.toexpo = this.strtonum.toExponential(2);
    this.todecimal = this.strtonum.toFixed(2);

    this.numformat = this.todecimal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  // Program 7
    arrayResults(): void{
    // Concatenate Array
    this.arrayconc = this.flower.concat(this.vechicle);

    // Excluding First and Last Element
    this.fstlastIndex = this.arrayconc;
    this.fstlastIndex.pop();
    this.fstlastIndex.shift();
    console.log('Excluding First and Last:' + this.fstlastIndex);

    // Array Data lenghth less than 4 character
    for (let i = 0; i < this.arrayconc.length; i++){
      if (this.arrayconc[i].length <= 4 ) {
              this.lessthan4[i] = this.arrayconc[i];
            }
    }
    console.log('Lessthan 4 Array:' + this.lessthan4);

    // After Removal of 2 Elements:
    this.rem2elements = this.arrayconc;
    this.rem2elements.splice(this.rem2elements.length - 2, 2);
    console.log('After Removal of 2 Elements:' + this.rem2elements);

    // After Adding of 4 Elements:
    this.add4elements = this.arrayconc;
    this.add4elements.push('flower1', 'flower2', 'flower3', 'flower4');
    console.log('After Adding of 4 Elements:' + this.add4elements);

    // Reverse Array
    this.revArray = this.arrayconc;
    this.revArray.reverse();
    console.log('Reverse Array:' + this.revArray);

    // Ascending & Descending
    this.ascending = this.arrayconc;
    this.ascending.sort();
    console.log('Ascending:' + this.ascending);


  }
}
