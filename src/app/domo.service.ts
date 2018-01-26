import { Injectable } from '@angular/core';
import { MqttService } from './mqtt.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import dataset from './data';

@Injectable()
export class DomoService {
  message = "";
  
  config = {
    "version":"...",
    "configWeb": { 
      "components": [ {"id":"0", "components": []} ], 
      "bottomMenus":[] 
    }
  };
  
  configCommands = { "devices": [] };
  
  devicesComponents = [];
  
  statuses = [];

  apiUrl = "http://82.66.49.29:8888/api";
  djsUrl = "http://82.66.49.29:8032/domojs/api/index.php";
  
  edfApiUrl = this.djsUrl+"/edf/"; // Quicker than apiUrl (3s vs 13s)
  configApiUrl = "assets/config.json";
  statusesApiUrl = this.apiUrl+"/statuses";
  configCommandsUrl = this.apiUrl+"/res/configCommands.json";
  
  
  constructor(
    private mqttService:MqttService,
    private http: HttpClient
  ) {
    this.getConfig();
    this.updateStatuses();
    this.getConfigCommands();
  }

  getConfig() {
    this.http.get<any>(this.configApiUrl)
      .subscribe(config => {
        console.log(config);
        this.config = config;
      }
    );     
  }
  
  fillDevicesComponentsFromConfigCommands() {
    for(let device of this.configCommands.devices) {
      let componentDevice = {
        "type":"dropdownMenuBig",
        "label": device.label,
        "glyphicon": device.glyphicon,
        "components": []
      };
      for(let command of device.commands) {
        componentDevice.components.push(command);
      }
      this.devicesComponents.push(componentDevice);
    }
  }
  
  getConfigCommands() {
    this.http.get<any>(this.configCommandsUrl)
      .subscribe(configCommands => {
        console.log(configCommands);
        this.configCommands = configCommands;
        //this.devicesComponents = this.configCommands.devices;
        this.fillDevicesComponentsFromConfigCommands();
      }
    );     
  }
  
  execComponentCommand(component): void {
    if (component != undefined) {
      this.execCommand(component.command);
    }
  } 
  
  execCommand(command): void {
    if (command != undefined) {
      if (command.type == 'cmdMqtt') {
        this.message = "...";
        setTimeout(()=> { this.message = ""; }, 500); 
        this.mqttService.execMqttMessage(command);
        this.updateStatusesDelayed();
      }
    }
  }
  
  updateStatuses() {
    this.http.get<any[]>(this.statusesApiUrl)
      .subscribe(statuses => {
        this.statuses = statuses;
      }
    );   
  }

  updateStatusesDelayed() {
    setTimeout(()=> { this.updateStatuses(); } , 1000);    
  }

  getStatus(key) {
    for(let status of this.statuses) {
      if (status[0] == key) {
        return status[1];
      }
    }
    return null;
  }
  
  getEDF(duree) {
    return this.http.get<any[]>(this.edfApiUrl+duree);
  }

  findComponents(component) {
    if (component.componentGroupId) {
      return this.findComponent(component.componentGroupId).components;
    }
    return component.components;
  }

  findComponent(id) {
    for(let component of this.config.configWeb.components) {
      if (component.id == id) {
        return component;
      }
    }
    console.log("ERROR: findComponent "+id+" not found");
    return null;
  }

}
