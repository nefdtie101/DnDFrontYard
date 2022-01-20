import { Component, OnInit } from '@angular/core';
import {SharedService} from "../shared.service";
import {RouterModule} from "@angular/router";
import { ModalService } from '../_modal';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    public modalService:ModalService,
    private sharedService: SharedService,
    private routerModule: RouterModule,
  ) { }

  ngOnInit(): void {
  }
}
