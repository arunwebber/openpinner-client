import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PinlistComponent } from './pinlist/pinlist.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) { }
  public getPins(pageNumber:number){
    console.log('Page No2:',pageNumber);
    let url = 'https://openpinner.mycryptowebs.com:4000/'
    if(pageNumber)
        url += '?page=' + pageNumber
        console.log('Url:',url);
    return this.httpClient.get(url);
  }
  public searchPins(pageNumber:number,InData:any){
    let searchTerm = {'term': InData };
    console.log('Search Pins Api',searchTerm);
    console.log('Page No api:',pageNumber);
    let url = 'https://openpinner.mycryptowebs.com:4000/search/'
    if(pageNumber)
        url += '?page=' + pageNumber
        console.log('Url:',url);
    if(typeof(InData)==='string'){
      console.log('String:',searchTerm);
      return this.httpClient.post(url,searchTerm);
    }else{
      console.log('Object:',searchTerm.term);
      return this.httpClient.post(url,searchTerm.term);
    }

  }
  public addPins(InData:any){
    console.log(InData);
    return this.httpClient.post(`https://openpinner.mycryptowebs.com:4000/save`,InData);
  }
  public checkHash(InData:any){
    console.log('Data To Post',InData);
    let data = {'hash': InData };
    return this.httpClient.post(`https://openpinner.mycryptowebs.com:4000/check`,data);
  }
}
