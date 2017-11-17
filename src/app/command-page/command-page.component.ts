import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DomoService } from '../domo.service';
import { MessageService } from '../message.service';
import { MqttService } from '../mqtt.service';

@Component({
  selector: 'app-command-page',
  templateUrl: './command-page.component.html',
  styleUrls: ['./command-page.component.css']
})
export class CommandPageComponent implements OnInit {

  constructor(
    private modalService: NgbModal, 
    private domoService: DomoService,
    private messageService: MessageService,
    private mqttService: MqttService
  ) {}

  ngOnInit(){
  }

}
