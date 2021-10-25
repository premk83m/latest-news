import { Component, OnInit } from '@angular/core';
import { EntriesService } from './entries.service';

@Component({
  selector: 'app-master-entries',
  templateUrl: './master-entries.component.html',
  styleUrls: ['./master-entries.component.css']
})
export class MasterEntriesComponent implements OnInit {

  constructor(private entriesservice: EntriesService) { }

  masterData: any;

  ngOnInit(): void {

    this.entriesservice.getDataFromAPI().subscribe(
      respondData => {
        this.masterData = respondData.items;
        console.log(this.masterData);
      }
    );


  }



}
