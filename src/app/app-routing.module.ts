import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {UserprofileComponent} from "./userprofile/userprofile.component";
import {NarrativeComponent} from "./narrative/narrative.component";
import {NotesComponent} from "./notes/notes.component";
import {MonsterindexComponent} from "./monsterindex/monsterindex.component";
import {StatsComponent} from "./stats/stats.component";
import {NpcComponent} from "./npc/npc.component";
import {SpellsComponent} from "./spells/spells.component";
import {ItemsComponent} from "./items/items.component";
import {NewUserComponent} from "./new-user/new-user.component";
import {HomeComponent} from "./home/home.component";
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'userProfile', component: UserprofileComponent },
  { path: 'narrative', component: NarrativeComponent },
  { path: 'monsterIndex', component: MonsterindexComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'npc', component: NpcComponent },
  { path: 'spells', component: SpellsComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'newUser', component: NewUserComponent },
  { path: 'home', component: HomeComponent },
  { path: '',redirectTo: '/login', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
