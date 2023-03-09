import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css']
})
export class CountryPageComponent implements OnInit {
covidData: any;

  constructor(private dataService: DataService){}

  ngOnInit(): void {
    this.dataService.getSummaryData().subscribe((data: any) => {
      this.covidData = data;
    });

  
  }
  searchCountry(country: String){
      const countries = this.covidData.Countries.filter((c: any) => c.Country.toLowerCase().includes(country.toLowerCase()));

      console.log('countries', countries);
      
  }
}
