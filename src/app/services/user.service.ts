import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

const API_URL = environment.API_URL + 'user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:variable-name
  setUserInfo(phone: any, first_name: any, last_name: any): Observable<any> {
    return this.http.put(API_URL, {phone, first_name, last_name});
  }


  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', {responseType: 'text'});
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', {responseType: 'text'});
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', {responseType: 'text'});
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', {responseType: 'text'});
  }
}
