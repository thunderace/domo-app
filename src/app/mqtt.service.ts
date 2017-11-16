import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { OnInit } from '@angular/core';
import { MqttMessage } from './mqttMessage';
import 'rxjs/add/operator/map'

@Injectable()
export class MqttService {
  mqttUrl: string = 'http://82.66.49.29:1880/mqtt';
  apiUrl = 'http://82.66.49.29:8888/api';
  
  //mqttMessages: Observable<MqttMessage[]>;
  mqttMessages: MqttMessage[];
  
  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) { }
  
  ngOnInit(){
    this.getMqttMessages();
  }

  getMqttMessages(): void {
    const url = this.apiUrl+'/mqtts';
    this.messageService.message = "MqttService.getMqttMessages1 get mqtt "+url;
    this.http.get<MqttMessage[]>(url).subscribe(mqttMessages => this.mqttMessages = mqttMessages);
  }
  
/*  
  getMqttMessages(): Observable<MqttMessage[]> {
    const url = this.apiUrl+'/mqtts';
    this.messageService.message = "MqttService.getMqttMessages get mqtt "+url;
    return this.http.get<MqttMessage[]>(url);
  }
*/ 
 
  refresh() {
    this.getMqttMessages();
  }  
  
  execMqttMessage(mqttMessage: MqttMessage) {
    const url = this.mqttUrl+'?topic='+mqttMessage.topic+'&payload='+mqttMessage.payload;
    this.messageService.message = "http exec mqtt "+url;
    this.http.get(url).subscribe(res => {
      this.messageService.message = res.toString();
      this.refresh();
    });
  }
}
