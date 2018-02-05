import { Injectable } from '@angular/core';
import { MyMqttService } from './mymqtt.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import dataset from './data';

export class Component {
  id: string;
  components: Component[];
}

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
  
  componentTabs = [];
  
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
    private myMqttService: MyMqttService,
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
        this.initComponentTabs();
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
        //console.log(configCommands);
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
        this.myMqttService.execMqttMessage(command);
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

  initComponentTabs() {
    this.componentTabs = [];
    for(let component of this.config.configWeb.components[0].components[0].components) {
      this.componentTabs.push(component);
    }
  }
  
  getTabIndex(id) {
    let index = 0;
    for(let component of this.componentTabs) {
      if (component.id == id) {
        return index;
      }
      index++;
    }   
    return -1;    
  }

  getNextPrevTab(selectedTab, next) {
    let index = this.getTabIndex(selectedTab);
    if (next) {
      index = (index+1) % this.componentTabs.length;
    } else {
      if (--index<0) { index = this.componentTabs.length-1; }
    }
    let component = this.componentTabs[index];
    if (component != null) {
      return component.id;
    }
    return selectedTab;
  }

  getNextTab(selectedTab) {
    return this.getNextPrevTab(selectedTab, true);
  }
  
  getPrevTab(selectedTab) {
    return this.getNextPrevTab(selectedTab, false);
  }

}
