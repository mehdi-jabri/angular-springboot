import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Role} from './role.model';


@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {

    this.headers = new HttpHeaders()
      .set('CLIENT-ID', '12345');
  }

  addRole(role: Role) { // create new role
    return this.http.post<Role>('/api/role/add', role);
  }

  getRole(): Observable<Role> { // get all role
    return this.http.get<Role>('/api/role/list');
  }

  getRoleById(id: number): Observable<Role> { // get role by id
    return this.http.get<Role>('/api/role/list' + id);
  }
}
