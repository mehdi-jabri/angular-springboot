import { Component, OnInit } from '@angular/core';

import { Application } from '../application.model';
import { Router } from '@angular/router';
import { ApplicationService } from '../application.service';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.scss']
})
export class ApplicationListComponent implements OnInit {
  apps: Application[];
  id: number;
  name: string;
  description: string;
  idClient: string;

  constructor(private router: Router,  private applicationService: ApplicationService) { }

  ngOnInit() {
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
    this.getAllApplication();
  }

    getAllApplication() {
    this.applicationService.getApplication().subscribe(apps => { this.apps = apps; });
  }
}
