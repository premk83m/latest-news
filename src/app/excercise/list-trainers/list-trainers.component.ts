import { Component, OnInit } from '@angular/core';
import { TrainersService } from './trainers.service';
import { take } from 'rxjs/operators';
@Component({
  selector: 'app-list-trainers',
  templateUrl: './list-trainers.component.html',
  styleUrls: ['./list-trainers.component.css']
})
export class ListTrainersComponent implements OnInit {

  constructor(private trainservice: TrainersService) { }

  listTrainers: any;
  includelistTrainers: any;

  ngOnInit(): void {
    this.trainservice.getTrainersDatafromAPI().subscribe(
      data => {
        this.listTrainers = data['items'];
        this.includelistTrainers = data['includes']['Entry'];
        console.log(this.listTrainers );
        console.log(this.includelistTrainers );
      }
    );
  }

}
