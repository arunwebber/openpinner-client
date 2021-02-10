import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  li:any;
  lis=[];
  InData:any;
  constructor(private apiService: ApiService) { }
  ngOnInit(): void {
      this.InData = ' ';
      this.apiService.searchPins(this.InData).subscribe((data)=>{
      this.li=data;
      this.lis=this.li.results;
    });
  }

  onSubmit(data:any){
    console.log(data.term);
    this.InData = data.term;
    this.apiService.searchPins(this.InData).subscribe((data)=>{
      this.li=data;
      this.lis=this.li.results;
    });
  }

}
