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
  title = 'Domo';
  config; // = []; //dataset.config;
  debug="ok";

  constructor(
    private modalService: NgbModal, 
    private domoService: DomoService,
    private messageService: MessageService
    ) {}

  ngOnInit(){
    this.config = this.domoService.getConfig();
    // this.http.get('http://82.66.49.29:8888/api/res/configNodeDomo.json').subscribe(res => {
    // this.config = res.json();
    // });
  }
}