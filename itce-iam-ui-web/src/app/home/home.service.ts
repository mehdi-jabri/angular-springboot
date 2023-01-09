import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MonObjet} from './home.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient: HttpClient) { }

  getProducts() {
    return this.httpClient.get<MonObjet>('/api/home');
  }
}
