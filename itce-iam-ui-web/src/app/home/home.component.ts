import { Component, OnInit } from '@angular/core';
import {HomeService} from './home.service';
import {MonObjet} from './home.model';
import { Application } from '../application/application.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  apps: Application[];
  id: number;
  name: string;
  description: string;
  idClient: string;

  constructor(private homeService: HomeService, private router: Router) { }

  ngOnInit() {
    this.homeService.getProducts().subscribe(
      (a: MonObjet) =>  console.log(a),
      error1 => console.log(error1)
    );
    this.apps =  [
      {
        id: 1,
        name: 'application 1',
        description: 'application test 1',
        id_client: '12345'
      },
      {
        id: 2,
        name: 'application 2',
        description: 'pplication test 2',
        id_client: '21256'
      },
      {
        id: 3,
        name: 'application 3',
        description: 'application test 3',
        id_client: '89076'
      },
      {
        id: 4,
        name: 'application 4',
        description: 'application test 4',
        id_client: '36790'
      }
    ];
  }

  private addApplication() {
    console.log('add');
    this.router.navigate(['/app/add']);
  }
}
