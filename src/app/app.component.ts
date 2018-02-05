import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DomoService } from './domo.service';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  selectedPage = "command-page";
  isNavbarCollapsed = true;
  
  constructor(
    private modalService: NgbModal, 
    public domoService: DomoService,
    private messageService: MessageService
  ) {}

  ngOnInit(){
    let selectedPage = localStorage.getItem('selectedPage');
    if (selectedPage != undefined) {
      this.selectedPage = selectedPage;
    }
  }
  
  selectPage(page) {
    this.selectedPage = page;
    localStorage.setItem('selectedPage', page);
    this.isNavbarCollapsed = true;
  }
  
  
  // swipe
  private swipeCoord?: [number, number];
  private swipeTime?: number;

  swipe(e: TouchEvent, when: string) {
    const coord: [number, number] = [e.changedTouches[0].pageX, e.changedTouches[0].pageY];
    const time = new Date().getTime();

    if (when === 'start') {
      this.swipeCoord = coord;
      this.swipeTime = time;
    }
    else if (when === 'end') {
      const direction = [coord[0] - this.swipeCoord[0], coord[1] - this.swipeCoord[1]];
      const duration = time - this.swipeTime;

      if (duration < 1000 //Short enough
        && Math.abs(direction[1]) < Math.abs(direction[0]) //Horizontal enough
        && Math.abs(direction[0]) > 30) {  //Long enough
        const swipe = direction[0] < 0 ? 'next' : 'previous';
        //Do whatever you want with swipe
        console.log(swipe);
      }
    }
  }  
}