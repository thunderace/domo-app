import { Component, OnInit } from '@angular/core';
import { MqttService } from '../mqtt.service';
import { MqttMessage } from '../mqttMessage';

@Component({
  selector: 'app-mqtt',
  templateUrl: './mqtt.component.html',
  styleUrls: ['./mqtt.component.css']
})
export class MqttComponent implements OnInit {

  mqttMessages: MqttMessage[];

  constructor(
    private mqttService:MqttService
  ) { }

  ngOnInit() {
    this.getMqttMessages();
  }

  getMqttMessages(): void {
    this.mqttService.getMqttMessages().subscribe(mqttMessages => this.mqttMessages = mqttMessages);
  }
  
  execMqttMessage(mqttMessage: MqttMessage) {
    this.mqttService.execMqttMessage(mqttMessage);
  }
  
  refresh() {
    this.mqttService.getMqttMessages();
  }
}
