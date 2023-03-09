import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-top-countries',
  templateUrl: './top-countries.component.html',
  styleUrls: ['./top-countries.component.css']
})
export class TopCountriesComponent implements OnInit, OnChanges {

  @Input() covidData: any;
  topConfirmedCases: any[] = [];
  topDeath: any[] = [];
  TopRecovered: any[] = [];
  constructor() {}

  ngOnInit(): void {
    
  }
  ngOnChanges(): void {
 this.topConfirmedCases = this.covidData.Countries?.sort((a: any, b:any ) => b.TotalConfirmed - a.TotalConfirmed ).slice(0, 5);
 this.topDeath = this.covidData.Countries?.sort((a: any, b:any ) => b.TotalDeaths- a.TotalDeaths ).slice(0, 5);
 this.TopRecovered = this.covidData.Countries?.sort((a: any, b:any ) => b.TotalRecovered- a.TotalRecovered ).slice(0, 5);
    console.log( "confirmed", this.topConfirmedCases);
    console.log( "death", this.topDeath);
    console.log( "recover", this.TopRecovered);
    
  }
}
