import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs';
import {UserModel} from "./login/service/models/user.model";
import {TestModel} from "./login/model/test.model";
import {ReturnResult} from "./return-result";
@Injectable({
  providedIn: 'root'
})
export class SharedService {


  constructor(private http:HttpClient) { }
  loginUser(val :UserModel){
    return this.http.post("http://localhost:5000/api/auth/Login",val)
  }


  async getTest(): Promise<TestModel> {
    return  this.http.get<TestModel>('http://localhost:5000/Test', {
        headers : new HttpHeaders().set('content-type','application/json')}).toPromise();
  }

}
