import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { MqttService } from './mqtt.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { catchError, map, tap } from 'rxjs/operators';
import dataset from './data';

@Injectable()
export class DomoService {
  config = dataset.config;
//  mqttUrl: string = 'http://82.66.49.29:1880/mqtt';
//  nodeUrl = 'http://82.66.49.29:8888/api';
   
  constructor(
    private messageService: MessageService,
    private mqttService:MqttService,
    private http: HttpClient
  ) { }

  getConfig(): object {
    return this.config;
  }
  
  execComponentCommand(component): void {
    if (component != undefined) {
      this.messageService.message = "Click component "+component.label;
      this.execCommand(component.command);
    }
  } 
  
  execCommand(command): void {
    if (command != undefined) {
      this.messageService.message = "Exec command "+command.topic+"|"+command.payload;
      if (command.type == 'cmdMqtt') {
        this.mqttService.execMqttMessage(command);
/*        
        const url = this.mqttUrl+'?topic='+command.topic+'&payload='+command.payload;
        this.messageService.message = "http get mqtt "+url;
        this.http.get(url).subscribe(res => {
          this.messageService.message = res.toString();
        });
*/        
      }
    }
  }
}
