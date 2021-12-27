import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="Die API se URL /api"
  readonly PhotoUrl="Die API SE URL /Photos "

  constructor(private http:HttpClient) { }

  getUserList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Users');
  }
  addUser(val:any){
    return this.http.post(this.APIUrl+'/Users',val)
  }
  updateUser(val:any) {
    return this.http.post(this.APIUrl + '/Users', val)
  }
  deleteUser(val:any) {
    return this.http.post(this.APIUrl + '/Users', val)
  }
  UploadPhoto(val:any){
  return this.http.post(this.APIUrl+'save location',val)
  }
}
