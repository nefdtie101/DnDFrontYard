import {Roles} from "./enum/roles";

export class UserModel {
  public UserId?: number;
  public UserName?: string;
  public Password?: string;
  public Role?: Roles;
  constructor() {
    this.UserId = 0;
    this.UserName ="";
    this.Password ="";
    this.Role=Roles.Spectator;
  }
}
