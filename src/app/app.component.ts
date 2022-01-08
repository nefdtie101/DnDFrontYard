import { Component } from '@angular/core';
import {ModalService} from "./_modal";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dnd-Frontend';
  id = 'NewCharacter'
  constructor(public modalService:ModalService){}
}

