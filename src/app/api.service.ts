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
  public searchPins(InData:any){
    var searchTerm = {'term': InData };
    return this.httpClient.post(`https://openpinner.mycryptowebs.com:4000/search`,searchTerm);
  }
  public addPins(InData:any){
    console.log(InData);
    return this.httpClient.post(`https://openpinner.mycryptowebs.com:4000/save`,InData);
  }
}
