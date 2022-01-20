import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from "../shared.service";
import {UserModel} from "./model/user.model";
import {TestModel} from "./model/test.model";
import {HttpClient} from "@angular/common/http";
import {TokenModel} from "./model/token.model";
import {ModalService} from '../_modal';
/*import {CharacterNarrative} from "../models/characternarrative-model";
import {MainStats} from "../models/mainstats-model";
import {SubStats} from "../models/substats-model";*/
import {Roles} from "./model/enum/roles";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {

  public login: TestModel = new TestModel();
/*  public substats :SubStats = new SubStats();
  public mainstats :MainStats= new MainStats();
  public characternarrative: CharacterNarrative= new CharacterNarrative();*/
  constructor(
    public modalService:ModalService,
    private http:HttpClient,
    private sharedService: SharedService,
  ) {}
  @Input()  user :UserModel = new UserModel();
  @Input()  roles : string ="";
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
   onCreateAccount(newusername:string, newpassword:string, piet:string):void {
    let roles
    if (piet == "Spectator"){
      roles=Roles.Spectator
    }
    if (piet == "GameMaster"){
      roles=Roles.GameMaster
    }
    if (piet == "Player"){
      roles=Roles.Player
    }
     this.user.UserName = newusername;
     this.user.Password = newpassword;
     this.user.Role=roles;
   }

}

