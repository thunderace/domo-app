import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DomoService } from '../domo.service';
import { MessageService } from '../message.service';
import { MqttService } from '../mqtt.service';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { NgbRadioGroup } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-measure-page',
  templateUrl: './measure-page.component.html',
  styleUrls: ['./measure-page.component.css']
})
export class MeasurePageComponent implements OnInit {

  model = 1;

  dureeEDF = "24";

  titleEDF = "Mesure conso";
  statsEDF = "xx KWh";
  infoEDF = "...";
  infoClickEDF = "xx ms";

  constructor(
    private modalService: NgbModal, 
    private domoService: DomoService,
    private messageService: MessageService,
    private mqttService: MqttService
  ) {}

  ngOnInit() {
  }

  beforeChange($event: NgbTabChangeEvent) {
//    this.messageService.message = "Save selectedComponentTab="+$event.nextId;
//    localStorage.setItem('selectedComponentTab', $event.nextId);
  }
  
  setDureeEDF($event) {
    console.log($event);
  }
  
  refreshEDF() {
    this.infoEDF = "Chargement des données...";
    console.log(this.dureeEDF);
    this.domoService.getEDF(this.dureeEDF)
      .subscribe(data => {
        // { time, PAPP }
        console.log(data);
        this.infoEDF = "Données chargées.";
      }
    );
  }
  
  
}
