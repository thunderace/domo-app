import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';

import { DomoModalComponent } from '../domo-modal/domo-modal.component';
import { DomoService } from '../domo.service';
import { MessageService } from '../message.service';
import { MqttService } from '../mqtt.service';

@Component({
  selector: 'app-domo-template',
  templateUrl: './domo-template.component.html',
  styleUrls: ['./domo-template.component.css']
})

export class DomoTemplateComponent implements OnInit {
  @Input() components;
  selectedTab;
  
  mqttFormMessage = { "topic": "home/domo/sonoff01/cmd", "payload": "version" };
  formTopics = ["home/domo/nodedomo/cmd", "home/domo/espIR01/cmd", "home/domo/espIR02/cmd", "home/domo/sonoff01/cmd", "home/domo/sonoff02/cmd"];
  formPayloads = ["version", "toggle", "irsend marantz C0D", "irsend nec FF000033"];
  
  constructor(
    private modalService: NgbModal, 
    private domoService: DomoService,
    private messageService: MessageService,
    private mqttService: MqttService
    ) {}

  ngOnInit() {
    let selectedComponentTab = localStorage.getItem('selectedComponentTab');
    if (selectedComponentTab != undefined) {
      this.selectedTab = selectedComponentTab;
    }
  }

  clickButton(content, component) {
    if (component.type == "dropdownMenu") {
      const modalRef = this.modalService.open(DomoModalComponent);
      modalRef.componentInstance.component = component;
      modalRef.result.then((result) => {
      }, (reason) => {
      });
    } else {
      if (component.confirmation) {
        //if (confirm("Confirmer ?") == false) { return; }
      }
      this.domoService.execComponentCommand(component);
    }
  }  
  
  beforeChange($event: NgbTabChangeEvent) {
    localStorage.setItem('selectedComponentTab', $event.nextId);
  }
  
  calcStyle(component) {
    let style = {"background-color":"#eee"};
    if (component && component.status && component.status.key) {
      let status = this.domoService.getStatus(component.status.key);
      if (status == 0) {
        style = {"background-color":"#f00"};
      } else if (status == 1) {
        style = {"background-color":"green"};
      }
    }
    return style;
  }
}
