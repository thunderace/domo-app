import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DomoService } from '../domo.service';

@Component({
  selector: 'app-modal-device',
  templateUrl: './modal-device.component.html',
  styleUrls: ['./modal-device.component.css']
})
export class ModalDeviceComponent implements OnInit {
  @Input() device;

  constructor(
    public activeModal: NgbActiveModal,
    private domoService: DomoService
  ) { 
  }

  ngOnInit() {
  }

  getDevicesProperties(device) {
    var propList = [];
    for (var propName in device) {
      if (propName != "commands" && propName != "id") {
        if(typeof(device[propName]) != "undefined") {
           propList.push({ "name": propName, "value": device[propName] });
        }
      }
    }
    return propList;
  }
}
