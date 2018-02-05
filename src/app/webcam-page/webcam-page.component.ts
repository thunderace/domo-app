import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DomoService } from '../domo.service';
import { MessageService } from '../message.service';
import { WebcamService } from '../webcam.service';

@Component({
  selector: 'app-webcam-page',
  templateUrl: './webcam-page.component.html',
  styleUrls: ['./webcam-page.component.css']
})
export class WebcamPageComponent implements OnInit {
  selectedTab = "live";
  webcamSize = 1;
  
  constructor(
    private modalService: NgbModal, 
    private domoService: DomoService,
    private messageService: MessageService,
    private webcamService: WebcamService
  ) {}

  ngOnInit() {
  }
}
