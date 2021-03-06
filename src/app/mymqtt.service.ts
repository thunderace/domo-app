import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { OnInit } from '@angular/core';
import { MyMqttMessage } from './mymqttMessage';
import 'rxjs/add/operator/map'
import { MqttMessage, MqttModule, MqttService } from 'ngx-mqtt';
import { AppService } from './app.service';

@Injectable()
export class MyMqttService {
  mqttUrl: string = 'http://82.66.49.29:1880/mqtt';
  apiUrl = 'http://82.66.49.29:8888/api';
  
  mqttMessages: MyMqttMessage[];
  
//  myMessage;
//  myOtherMessage: Observable<MqttMessage>;  
  
  constructor(
    private appService: AppService,
    private messageService: MessageService,
    private http: HttpClient,
    private mqttService: MqttService
  ) { 
    this.getMqttMessages();
  }
  
  public unsafePublish(topic: string, message: string): void {
    this.mqttService.unsafePublish(topic, message, {qos: 1, retain: true});
  }

  getMqttMessages(): void {
    const url = this.apiUrl+'/mqtts';
    this.messageService.message = "MyMqttService.getMqttMessages1 get mqtt "+url;
    this.http.get<MyMqttMessage[]>(url).subscribe(
      mqttMessages => this.mqttMessages = mqttMessages
    );
  }
  
  refresh() {
    setTimeout(()=> { this.getMqttMessages();} , 1000);    
  }  
  
  publishMqttMessage(mqttMessage: MyMqttMessage) {
    console.log(">> MQTT publish "+mqttMessage.topic+" "+mqttMessage.payload);
    this.unsafePublish(mqttMessage.topic, mqttMessage.payload);
    this.refresh();
  }
}
