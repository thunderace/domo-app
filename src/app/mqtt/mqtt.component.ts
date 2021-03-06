import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MyMqttService } from '../mymqtt.service';
import { MyMqttMessage } from '../mymqttMessage';

@Component({
  selector: 'app-mqtt',
  templateUrl: './mqtt.component.html',
  styleUrls: ['./mqtt.component.css']
})
export class MqttComponent implements OnInit {

  mqttCallapsed = true;

  constructor(
    public myMqttService: MyMqttService
  ) {
    
  }

  ngOnInit() {
    let mqttCallapsed = JSON.parse(localStorage.getItem('mqttCallapsed'));
    if (mqttCallapsed != undefined) {
      this.mqttCallapsed = mqttCallapsed;
    } else {
      this.setMqtt(this.mqttCallapsed);
    }
    this.myMqttService.refresh();
  }
  
  toggleMqtt() {
    this.setMqtt(!this.mqttCallapsed);
  }
  
  setMqtt(value) {
    this.mqttCallapsed = value;
    localStorage.setItem('mqttCallapsed', JSON.stringify(this.mqttCallapsed));
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
