import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DomoService } from '../domo.service';
import { MessageService } from '../message.service';
import { MqttService } from '../mqtt.service';

@Component({
  selector: 'app-webcam-page',
  templateUrl: './webcam-page.component.html',
  styleUrls: ['./webcam-page.component.css']
})
export class WebcamPageComponent implements OnInit {
  constructor(
    private modalService: NgbModal, 
    private domoService: DomoService,
    private messageService: MessageService,
    private mqttService: MqttService
  ) {}

  ngOnInit() {
  }

  refreshWebcam(webcam) {
    webcam.sourceRnd = webcam.source+"?random=" + Math.random();
    console.log(webcam.sourceRnd);
  }
  
  getWebcamUrl(webcam): string {
    if (webcam.sourceRnd == undefined) {
      webcam.sourceRnd = webcam.source+"?random=" + Math.random();
    }
    return webcam.sourceRnd;
  }
}
