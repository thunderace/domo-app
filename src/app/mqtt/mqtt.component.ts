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

//  mqttMessages$: Observable<MqttMessage[]>;
//  mqttMessages: Observable<MqttMessage[]>;
//  mqttMessages: MqttMessage[];

  constructor(
    private mqttService: MqttService
  ) {}

  ngOnInit() {
//    this.getMqttMessages();
    this.mqttService.refresh();
  }

  getMqttMessages() {
//    this.mqttService.getMqttMessages().subscribe(mqttMessages => this.mqttMessages = mqttMessages);
//    this.mqttService.mqttMessages.subscribe(mqttMessages => this.mqttMessages = mqttMessages);
    
//    this.mqttMessages$ = this.mqttService.getMqttMessages();
//    this.mqttMessages$ = this.mqttService.getMqttMessages();
//    this.mqttMessages = this.mqttService.mqttMessages;
//    this.mqttMessages$ = this.mqttService.mqttMessages;
//    this.mqttService.getMqttMessages().subscribe(mqttMessages => this.mqttMessages = mqttMessages);
//    return this.mqttMessages;
  }
  
  // execMqttMessage(mqttMessage: MqttMessage) {
    // this.mqttService.execMqttMessage(mqttMessage);
  // }
  
  refresh() {
    // this.mqttService.refresh();
//    this.mqttService.getMqttMessages().subscribe(mqttMessages => this.mqttMessages = mqttMessages);
    //this.mqttMessages = this.mqttService.getMqttMessages();
    //this.mqttMessages$ = this.mqttService.getMqttMessages();
    //this.mqttService.getMqttMessages();
    //this.getMqttMessages();
  }
  
}
