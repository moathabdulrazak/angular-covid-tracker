import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.css']
})
export class SummaryPageComponent implements OnInit {

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getSummaryData().subscribe((data: any) => {
      console.log('summary data', data);
      
    });
  }
}
