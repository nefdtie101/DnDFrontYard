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
  { path: 'UserProfile', component: UserprofileComponent },
  { path: 'Narrative', component: NarrativeComponent },
  { path: 'MonsterIndex', component: MonsterindexComponent },
  { path: 'Stats', component: StatsComponent },
  { path: 'NPC', component: NpcComponent },
  { path: 'Spells', component: SpellsComponent },
  { path: 'Items', component: ItemsComponent },
  { path: 'Notes', component: NotesComponent },
  { path: 'NewUser', component: NewUserComponent },
  { path: 'Home', component: HomeComponent },
  { path: '',redirectTo: '/login', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
