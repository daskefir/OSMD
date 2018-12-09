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
  }
}
