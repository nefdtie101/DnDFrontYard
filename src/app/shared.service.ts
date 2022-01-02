import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs';
import {UserModel} from "./login/service/models/user.model";
import {TestModel} from "./login/model/test.model";
@Injectable({
  providedIn: 'root'
})
export class SharedService {


  constructor(private http:HttpClient) { }
  loginUser(val :UserModel){
    return this.http.post("http://localhost:5000/api/auth/Login",val)
  }
  // getUserList():Observable<any[]>{
  //   return this.http.get<any>('');
  // }
  // addUser(val:any){
  //   return this.http.post('/Users',val)
  // }
  // updateUser(val:any) {
  //   return this.http.post(this.APIUrl + '/Users', val)
  // }
  // deleteUser(val:any) {
  //   return this.http.post('http://localhost:5000/Create ', val)
  // }
  // UploadPhoto(val:any){
  // return this.http.post(this.APIUrl+'save location',val)
  // }



  async getTest()  {
    this.http.get('http://localhost:5000/Test').toPromise()
      .then(data => {
        return data
      })
  }

}
