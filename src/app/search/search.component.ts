import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  page:any;
  pageNumber = 1;
  li:any;
  lis=[];
  InData:any;
  constructor(private apiService: ApiService) { }
  ngOnInit(): void {
      this.InData = ' ';
      this.apiService.searchPins(this.page,this.InData).subscribe((data)=>{
      this.li=data;
      this.li.pageNumber=this.pageNumber;
      this.lis=this.li.results;
    });
  }

  onSubmit(data:any,page:any){
    console.log('On Submit',data.term);
    console.log('On submit:',page);
    this.InData = data.term;

    this.apiService.searchPins(page,this.InData).subscribe((data)=>{
      this.li=data;
      this.lis=this.li.results;
      this.li.pageNumber=1;
    });
  }
  next(page:any,searchTerm:any){
     const nextPage= page +1
     this.apiService.searchPins(nextPage,searchTerm).subscribe((data)=>{
       console.log('Next pagessss:',page);
       console.log('Term on next:',searchTerm);
       console.log(data);
       this.li=data;
       this.li.pageNumber=nextPage;
       this.lis=this.li.results;
    })
  }
  back(page:any,searchTerm:any){
     const nextPage= page - 1
     console.log('Next pagessss:',page);
     console.log('Term on next:',searchTerm);
     this.apiService.searchPins(nextPage,searchTerm ).subscribe((data)=>{
       console.log('Results:',data);
       this.li=data;
       this.li.pageNumber=nextPage;
       this.lis=this.li.results;
    })
  }
}
