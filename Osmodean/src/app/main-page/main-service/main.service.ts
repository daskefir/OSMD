import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../../models/company';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private httpClient: HttpClient) { }

  getCompanyInfo() {
    return this.httpClient.get<Company>('http://localhost:3000/main');
    // .subscribe(data => {
    //   data = data;
    //   console.log(data);
    // });
  }

  // getContests() {
  //   this.httpClient.get('http://localhost:3000/admin')
  //     .subscribe(data => {
  //       data = data;
  //     });
  // }

  //   getContestById(id: string) {
  //     return this.httpClient.put('http://localhost:3000/contest/id', { id });
  //   }
}
