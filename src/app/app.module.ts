import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StatsComponent } from './stats/stats.component';
import { MonsterindexComponent } from './monsterindex/monsterindex.component';
import { SkillsComponent } from './skills/skills.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { NarrativeComponent } from './narrative/narrative.component';
import { ItemsComponent } from './items/items.component';
import { NotesComponent } from './notes/notes.component';
import { NpcComponent } from './npc/npc.component';
import { LoginComponent } from './login/login.component';
import {SharedService} from "./shared.service";
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {Routes, RouterModule} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import {UserModel} from "./login/model/user.model";
import { NewUserComponent } from './new-user/new-user.component';
import {ModalModule} from "./_modal";
@NgModule({
  declarations: [
    AppComponent,
    StatsComponent,
    MonsterindexComponent,
    SkillsComponent,
    UserprofileComponent,
    NarrativeComponent,
    ItemsComponent,
    NotesComponent,
    NpcComponent,
    LoginComponent,
    NewUserComponent,
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        AppRoutingModule,
        ModalModule

    ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
