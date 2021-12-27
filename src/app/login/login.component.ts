import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {SharedService} from "../shared.service";
import {UserModel} from "./service/models/user.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {


  constructor(
    private sharedService: SharedService
  ) {}
  @Input()  user :UserModel = new UserModel();

  ngOnInit(): void {
  }

  onLogin():void {
    let test = this.user
    this.sharedService.loginUser().subscribe(user => this.user = user);
  }

}
