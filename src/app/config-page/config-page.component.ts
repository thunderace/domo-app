import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { DomoService } from '../domo.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ModalDeviceComponent } from '../modal-device/modal-device.component';

@Component({
  selector: 'app-config-page',
  templateUrl: './config-page.component.html',
  styleUrls: ['./config-page.component.css']
})
export class ConfigPageComponent implements OnInit {

  selectedTab;
  
  mqttFormMessage = { "topic": "home/domo/sonoff01/cmd", "payload": "version" };
  
  // TODO in config
  formTopics = [
    "home/domo/nodedomo/cmd", 
    "home/domo/espIR01/cmd", 
    "home/domo/espIR02/cmd", 
    "home/domo/sonoff01/cmd", 
    "home/domo/sonoff02/cmd", 
    "home/domo/espIR01/event"
  ];
  
  formPayloads = [
    "version", 
    "toggle", 
    "irsend marantz C0D", 
    "irsend nec FF000033", 
    "rxIR proto=4 code=811 (12 bits)"
  ];

  selectedDevice;

  constructor(
    public appService: AppService,
    public modalService: NgbModal, 
    public domoService: DomoService
  ) { 
  }

  ngOnInit() {
  }

  selectDevice(id) {
    if (this.selectedDevice == id) {
      this.selectedDevice = null;
    } else {
      this.selectedDevice = id;
    }
  }
  
  getDevicesProperties(device) {
    var propList = [];
    for(var propName in device) {
      if (propName != "commands" && propName != "id") {
        if(typeof(device[propName]) != "undefined") {
           propList.push({ "name": propName, "value": device[propName] });
        }
      }
    }
    return propList;
  }
  
  clickButton(content, device) {
    const modalRef = this.modalService.open(ModalDeviceComponent);
     modalRef.componentInstance.device = device;
     modalRef.result.then((result) => {
    }, (reason) => {
    });
  }    
  
}
