import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit, OnChanges {
@Input() covidData: any;
countries: any[] = []
  constructor(){}

  ngOnInit(): void {
    
  }
  ngOnChanges(): void {
  this.countries = this.covidData?.Countries;
  console.log('data datatbale', this.countries);
  
}
}
