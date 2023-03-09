import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';
import { SearchService } from 'src/app/shared/services/search.service';
import { Subscription} from 'rxjs'
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit, OnChanges, OnDestroy {
@Input() covidData: any;
countries: any[] = []
subscription = new Subscription();
  constructor(private searchService: SearchService){}

  ngOnInit(): void {
  this.subscription  = this.searchService.getCountries().subscribe((data: any) => {
      this.countries = data;
    });
  }
  ngOnChanges(): void {
  this.countries = this.covidData?.Countries;
  console.log('data datatbale', this.countries);
  
}

ngOnDestroy(): void {
  this.subscription.unsubscribe();
}
}
