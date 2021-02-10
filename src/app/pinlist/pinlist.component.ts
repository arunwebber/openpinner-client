import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-pinlist',
  templateUrl: './pinlist.component.html',
  styleUrls: ['./pinlist.component.css']
})
export class PinlistComponent implements OnInit {
  page:any;
  pageNumber = 1;
  li:any;
  lis=[];
  constructor(private apiService: ApiService) { }
  ngOnInit(): void {
    this.apiService.getPins(this.pageNumber).subscribe((data)=>{
      console.log('Page No:',this.pageNumber);
      console.log(data);
      this.li=data;
      this.li.pageNumber=this.pageNumber;
      this.lis=this.li.pins;
    });
  }
  next(page:any){
     const nextPage= page +1
     this.apiService.getPins(nextPage).subscribe((data)=>{
       console.log('Next pagessss:',page);
       console.log(data);
       this.li=data;
       this.li.pageNumber=nextPage;
       this.lis=this.li.pins;
    })
  }
  back(page:any){
     const nextPage= page - 1
     this.apiService.getPins(nextPage).subscribe((data)=>{
       console.log('Next pagessss:',page);
       console.log(data);
       this.li=data;
       this.li.pageNumber=nextPage;
       this.lis=this.li.pins;
    })
  }
}
