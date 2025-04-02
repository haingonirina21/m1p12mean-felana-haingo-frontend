import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { api } from '../constant';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {
  private readonly apiUrl =`${api}/users/register`;;
  constructor(private readonly http:HttpClient) {

  }

  sendData(data:any) : Observable<any> {
      return this.http.post(this.apiUrl, data)
  }
}
