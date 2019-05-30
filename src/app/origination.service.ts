import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OriginationService {

  constructor(private http: HttpClient) {
  }

  API_URL = '//localhost:9090/';

  getAll(): Observable<any> {
    return this.http.get(this.API_URL + 'getAllUser');
  }

  getUser(id: string): Observable<any> {
    return this.http.get(this.API_URL + 'getUser?id=' + id);
  }

  registerUser(user: any): Observable<any> {
    console.log(user);
    return this.http.post(this.API_URL + 'registerUser', user);
  }

  removeUser(id: string): Observable<any> {
    return this.http.delete(this.API_URL + 'deleteUser?id=' + id);
  }

  saveUser(id: string): Observable<any> {
    return this.http.post(this.API_URL + 'saveUser?id=' + id, id);
  }
}
