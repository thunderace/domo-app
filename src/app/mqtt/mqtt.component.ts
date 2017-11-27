import { Component, OnInit } from '@angular/core';
import { MqttService } from '../mqtt.service';
import { MqttMessage } from '../mqttMessage';
import { Observable } from 'rxjs/Observable';

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
      let payload = JSON.parse(mqttMessage.payload);
      var msg: String = payload.msg
      return "("+msg+")";
    }
    return mqttMessage.payload;
  }
}
