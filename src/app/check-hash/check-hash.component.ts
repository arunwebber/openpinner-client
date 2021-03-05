import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
@Component({
  selector: 'app-check-hash',
  templateUrl: './check-hash.component.html',
  styleUrls: ['./check-hash.component.css']
})
export class CheckHashComponent implements OnInit {
  data:any;
  li:any;
  lis=[];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }
  onSubmit(data:any){
    this.apiService.checkHash(data.term).subscribe((data:any)=>{
      console.log(data);
      this.li=data;
      this.lis=this.li;
    });
  }
}
