import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MqttService } from '../mqtt.service';
import { MqttMessage } from '../mqttMessage';

@Component({
  selector: 'app-mqtt',
  templateUrl: './mqtt.component.html',
  styleUrls: ['./mqtt.component.css']
})
export class MqttComponent implements OnInit {

  constructor(
    private mqttService: MqttService
  ) {}

  ngOnInit() {
    this.mqttService.refresh();
  }
  
  calcMqttPayload(mqttMessage) {
    if (mqttMessage.topic.indexOf("home/domo/log/")>=0) {
      if (mqttMessage.payload.indexOf("msg")>=0) {
        try {
          let payload = JSON.parse(mqttMessage.payload);
          var msg: String = payload.msg
          return "("+msg+")";
        } catch (ex) {
          console.log("Error parsing json: ["+mqttMessage.payload+"]");
        }
      }
    }
    return mqttMessage.payload;
  }
}
