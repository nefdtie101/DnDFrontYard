import { Component, OnInit } from '@angular/core';
import {SharedService} from "../shared.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
  }

  onProfile(): void{
    this.sharedService.getProfile().then((res: string) =>{
    });
  }

  onHome(): void{
    this.sharedService.getHome().then((res: string) =>{
    });
  }

  onNarrative(): void{
    this.sharedService.getNarrative().then((res: string) =>{
    });
  }

  onNotes(): void{
    this.sharedService.getNotes().then((res: string) =>{
    });
  }

  onNpc(): void{
    this.sharedService.getNpc().then((res: string) =>{
    });
  }

  onItems(): void{
    this.sharedService.getItems().then((res: string) =>{
    });
  }

  onAnimal(): void{
    this.sharedService.getAnimal().then((res: string) =>{
    });
  }

  onStats(): void{
    this.sharedService.getStats().then((res: string) =>{
    });
  }

  onSpells(): void{
    this.sharedService.getSpells().then((res: string) =>{
    });
  }

  onExit(): void{
    this.sharedService.getTest().then((res: string) =>{
    });
  }
}
