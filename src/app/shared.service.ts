import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs';
import {UserModel} from "./login/model/user.model";
import {TestModel} from "./login/model/test.model";
import {ReturnResult} from "./return-result";
import {TokenModel} from "./login/model/token.model";
@Injectable({
  providedIn: 'root'
})
export class SharedService {


  constructor(private http:HttpClient) { }

  async loginUser(val :UserModel) : Promise<TokenModel>{
    const send = JSON.stringify(val)
    return  this.http.post<TokenModel>('http://localhost:5000/api/auth/Login', send, {
      headers : new HttpHeaders().set('content-type','application/json')}).toPromise();
  }


  async getTest(): Promise<string> {
    return  this.http.get<string>(`http://localhost:5000/api/auth/test`, {
        headers : new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('jwt')}`)}).toPromise();
  }

}
