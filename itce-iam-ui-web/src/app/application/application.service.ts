import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Application } from './application.model';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders()
      .set('CLIENT-ID', '12345');
  }

  addApplication(app: Application) { // create new application
    return this.http.post<Application>('/api/app/add', app);
  }

  getApplication(): Observable<Application[]> { // get all application
    return this.http.get<Application[]>('/api/app/list');
  }

  getApplicationById(id: number): Observable<Application> { // get application by id
    return this.http.get<Application>('/api/app/list' + id);
  }

  update(app: Application) {
    return this.http.put('/api/app/edit/' + app.id, app);
  }

  delete(id: number) {
    return this.http.delete('/api/app/' + id);
  }
}
