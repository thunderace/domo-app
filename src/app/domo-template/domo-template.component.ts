import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';

import { AppService } from '../app.service';
import { DomoModalComponent } from '../domo-modal/domo-modal.component';
import { DomoService } from '../domo.service';
import { MessageService } from '../message.service';
import { MyMqttService } from '../mymqtt.service';
import { WebcamService } from '../webcam.service';

@Component({
  selector: 'app-domo-template',
  templateUrl: './domo-template.component.html',
  styleUrls: ['./domo-template.component.css']
})

export class DomoTemplateComponent implements OnInit {
  @Input() mode;
  @Input() components: any[];
  @Input() devices: any[];
  
  mqttFormMessage = { "id":"", "date":"", "topic": "home/domo/sonoff01/cmd", "payload": "version" };
  formTopics = ["home/domo/nodedomo/cmd", "home/domo/espIR01/cmd", "home/domo/espIR02/cmd", "home/domo/sonoff01/cmd", "home/domo/sonoff02/cmd", "home/domo/espIR01/event"];
  formPayloads = ["version", "toggle", "mute", "irsend marantz C0D", "irsend nec FF000033", "rxIR proto=4 code=811 (12 bits)"];
  
  constructor(
    private appService: AppService,
    private modalService: NgbModal, 
    private domoService: DomoService,
    private messageService: MessageService,
    private myMqttService: MyMqttService,
    private webcamService: WebcamService
    ) {
    }

  ngOnInit() {
    let formTopics = localStorage.getItem('formTopics');
    if (formTopics != undefined) {
      this.formTopics = formTopics.split("§");
    }
    let formPayloads = localStorage.getItem('formPayloads');
    if (formPayloads != undefined) {
      this.formPayloads = formPayloads.split("§");
    }
  }
  
  clickButton(content, component) {
    if (component.type == "dropdownMenuBig" || component.type == "device") {
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
  
  calcStyle(component) {
    let style = {"color":"#eee"};
    if (component && component.status && component.status.key) {
      let status = this.domoService.getStatus(component.status.key);
      if (status == 0) {
        style = {"color":"#d90429"};
      } else if (status == 1) {
        style = {"color":"#6ea24f"};
      }
    }
    return style;
  }

  calcClass(component) {
    let res = "btn btn-default btn-cmd";
    if (component.class) { res+=" "+component.class; }
    return res;
  }

  // mqtt form
  sendMqttFromMessage() {
    var i=0;
    while(i<this.formTopics.length) {
      if (this.formTopics[i] == this.mqttFormMessage.topic) {
        this.formTopics.splice(i, 1);
      } else {
        i++;
      }
    }
    this.formTopics.unshift(this.mqttFormMessage.topic);
    localStorage.setItem('formTopics', this.formTopics.join("§"));
    
    i=0;
    while(i<this.formPayloads.length) {
      if (this.formPayloads[i] == this.mqttFormMessage.payload) {
        this.formPayloads.splice(i, 1);
      } else {
        i++;
      }
    }
    this.formPayloads.unshift(this.mqttFormMessage.payload);
    localStorage.setItem('formPayloads', this.formPayloads.join("§"));
    
    this.myMqttService.publishMqttMessage(this.mqttFormMessage);
  }

}
