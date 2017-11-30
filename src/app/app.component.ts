import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DomoService } from './domo.service';
import { MessageService } from './message.service';
import { MqttService } from './mqtt.service';

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
    private domoService: DomoService,
    private messageService: MessageService,
    private mqttService: MqttService
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
}