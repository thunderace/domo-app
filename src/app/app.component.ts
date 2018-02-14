import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AppService } from './app.service';
import { DomoService } from './domo.service';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  //selectedPage = "command-page";
  isNavbarCollapsed = true;
  MAX_ANGLE = 50;
  
  constructor(
    public appService: AppService,
    private modalService: NgbModal, 
    public domoService: DomoService,
    private messageService: MessageService
  ) {}

  ngOnInit(){
    // let selectedPage = localStorage.getItem('selectedPage');
    // if (selectedPage != undefined) {
      // this.selectedPage = selectedPage;
    // }
  }
  
  // selectPage(page) {
    // this.selectedPage = page;
    // localStorage.setItem('selectedPage', page);
    // this.isNavbarCollapsed = true;
  // }
  
  onPanEnd(event: any): void {
    if (event.additionalEvent == "panright" && Math.abs(event.angle)<this.MAX_ANGLE) {
      this.domoService.selectPrevPage();
    }
    else if (event.additionalEvent == "panleft" && Math.abs(Math.abs(event.angle)-180)<this.MAX_ANGLE) {
      this.domoService.selectNextPage();
    }
  }   
}