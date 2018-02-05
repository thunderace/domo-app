import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { OnInit } from '@angular/core';
import { MyMqttMessage } from './mymqttMessage';
import 'rxjs/add/operator/map'
//import { MqttMessage, MqttModule, MqttService } from 'ngx-mqtt';

@Injectable()
export class MyMqttService {
  mqttUrl: string = 'http://82.66.49.29:1880/mqtt';
  apiUrl = 'http://82.66.49.29:8888/api';
  
  //mqttMessages: Observable<MyMqttMessage[]>;
  mqttMessages: MyMqttMessage[];
  
  // myMessage;
  // myOtherMessage: Observable<MqttMessage>;  
  
  constructor(
    private messageService: MessageService,
    private http: HttpClient,
//    private mqttService: MqttService
  ) { }
  
  ngOnInit(){
    this.getMqttMessages();
    
    // ngx-mqtt
    // this.mqttService.observe('home/domo/log/espIR01').subscribe((message: MqttMessage) => {
      // console.log(">>MQTT: "+message.payload.toString());
      // this.myMessage = message.payload.toString();
    // });
    // this.myOtherMessage = this.mqttService.observe('home/domo');    
  }
  
  // public unsafePublish(topic: string, message: string): void {
    // this.mqttService.unsafePublish(topic, message, {qos: 1, retain: true});
  // }

  getMqttMessages(): void {
    const url = this.apiUrl+'/mqtts';
    this.messageService.message = "MyMqttService.getMqttMessages1 get mqtt "+url;
    this.http.get<MyMqttMessage[]>(url).subscribe(mqttMessages => this.mqttMessages = mqttMessages);
  }
  
  refresh() {
    setTimeout(()=> { this.getMqttMessages();} , 1000);    
  }  
  
  execMqttMessage(mqttMessage: MyMqttMessage) {
    const url = this.mqttUrl+'?topic='+mqttMessage.topic+'&payload='+mqttMessage.payload;
    this.messageService.message = "http exec mqtt "+url;
    console.log("http exec mqtt "+url);
    this.http.get(url).subscribe(res => {
      this.messageService.message = res.toString();
      this.refresh();
    });
  }
}