import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { OnInit } from '@angular/core';
import { MqttMessage } from './mqttMessage';

@Injectable()
export class MqttService {
  mqttUrl: string = 'http://82.66.49.29:1880/mqtt';
  nodeUrl = 'http://82.66.49.29:8888/api';
  
  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) { }
  
  ngOnInit(){
  }

  getMqttMessages(): Observable<MqttMessage[]> {
    const url = this.nodeUrl+'/mqtts';
    this.messageService.message = "get mqtt "+url;
    return this.http.get<MqttMessage[]>(url);
  }
  
  execMqttMessage(mqttMessage: MqttMessage) {
    const url = this.mqttUrl+'?topic='+mqttMessage.topic+'&payload='+mqttMessage.payload;
    this.messageService.message = "http exec mqtt "+url;
    this.http.get(url).subscribe(res => {
      this.messageService.message = res.toString();
    });
  }
}
