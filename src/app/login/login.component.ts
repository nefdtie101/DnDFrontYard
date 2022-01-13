import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {SharedService} from "../shared.service";
import {UserModel} from "./model/user.model";
import {Observable} from "rxjs";
import {TestModel} from "./model/test.model";
import {translateStatement} from "@angular/compiler-cli/src/ngtsc/translator";
import {HttpClient} from "@angular/common/http";
import {TokenModel} from "./model/token.model";
import { ModalService } from '../_modal';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  username: string = '';
  public login: TestModel = new TestModel();
  constructor(
    private http:HttpClient,
    private sharedService: SharedService
  ) {}
  @Input()  user :UserModel = new UserModel();

  ngOnInit(): void {

  }
  onLogin(username:string, password:string):void {
    this.user.UserName = username;
    this.user.Password = password;
    this.sharedService.loginUser(this.user).then(
      (res: TokenModel) =>{
        localStorage.setItem('jwt',res.token);
      }
    )

  }

  onTest(): void{
    this.sharedService.getTest().then((res: string) =>{
      console.log("res")
    });
  }


}

