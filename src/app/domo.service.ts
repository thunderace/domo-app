import { Injectable } from '@angular/core';
import { MyMqttService } from './mymqtt.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppService } from './app.service';
import { MqttMessage, MqttModule, MqttService } from 'ngx-mqtt';

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
      "webcams": [],
      "bottomMenus": [] 
    }
  };
  
  bottomMenus = [];
  componentTabs = [];
  configCommands = { "devices": [] };
  devicesComponents = [];
  statuses = [];
  mqttDevices = [];

  apiUrl = "http://82.66.49.29:8888/api";
  djsUrl = "http://82.66.49.29:8032/domojs/api/index.php";

  edfApiUrl = this.djsUrl+"/edf/"; // Faster than apiUrl (3s vs 13s)
  configApiUrl = "assets/config.json";
  statusesApiUrl = this.apiUrl+"/statuses";
  configCommandsUrl = this.apiUrl+"/res/configCommands.json";
  mqttDevicesApiUrl = this.apiUrl+"/devices";
  

  MQTT_DOMO_NGDOMO = 'home/domo/ngDomo/cmd';
  MQTT_DOMO_NGDOMO_LOG = 'home/domo/log/ngDomo';
  MQTT_NODE_DOMO_INV_CMD = 'home/domo/inventory/cmd'
  MQTT_NODE_DOMO_INV_RES = 'home/domo/inventory/res'
  VERSION = "v16022018-1739";
  mqttId = "domo-app-"+new Date().getTime(); 
  CMD_INVENTORY = { "type":"cmdMqtt", "topic": "home/domo/nodedomo/cmd", "payload": "inventory" };
  
  constructor(
    private myMqttService: MyMqttService,
    private mqttService: MqttService,
    private http: HttpClient,
    private appService: AppService
  ) {
    this.getConfig();
    this.getStatuses();
    this.getConfigCommands();
    this.getMqttDevices();
    
    this.mqttService.observe(this.MQTT_DOMO_NGDOMO).subscribe((message: MqttMessage) => {
      var payload = message.payload.toString();
      console.log(">>MQTT ngDomo: ["+payload+"]");
      if (this.appService.lsOptions.synchroMqtt) {
        let cmd = payload;
        if (cmd == "selectNextTab") {
          this.selectNextTab();
        }
        if (cmd == "selectPrevTab") {
          this.selectPrevTab();
        }
        if (cmd == "version") {
          this.myMqttService.unsafePublish(this.MQTT_DOMO_NGDOMO_LOG, this.VERSION);
        }

        try {
          if (payload.indexOf("[")>-1 || payload.indexOf("{")>-1) {
            let cmdObj = JSON.parse(payload);
            if (cmdObj&& cmdObj.cmd) {
              if (cmdObj.cmd == "selectTab" && cmdObj.id) {
                this.appService.selectTab(cmdObj.id);
              }
            }
          }
        } 
        catch(error) {
          console.log(error);
        }
      }
    });  

    this.mqttService.observe(this.MQTT_NODE_DOMO_INV_CMD).subscribe((message: MqttMessage) => {
      var s = '{';
      s += '"id": "'+this.mqttId+'", ';
      s += '"status": "OK", ';
      s += '"version": "'+this.VERSION+'", ';
      s += '"mqttUrl": "'+this.MQTT_DOMO_NGDOMO+'", ';
      s += '"commands": [';
      s += '{"type":"command", "label": "Version", "command": {"type":"cmdMqtt", "topic": "home/domo/ngDomo/cmd", "payload": "version"}}';
      s += ']';
      s += '}';
      this.mqttService.unsafePublish(this.MQTT_NODE_DOMO_INV_RES, s);      
    }); 
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
        this.configCommands = configCommands;
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
        this.myMqttService.publishMqttMessage(command);
        this.getStatusesDelayed();
      }
    }
  }
  
  getStatuses() {
    this.http.get<any[]>(this.statusesApiUrl)
      .subscribe(statuses => {
        this.statuses = statuses;
      }
    );   
  }

  getStatusesDelayed() {
    setTimeout(()=> { this.getStatuses(); } , 1000);    
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
  
  getMqttDevices() {
    this.http.get<any[]>(this.mqttDevicesApiUrl)
      .subscribe(mqttDevices => {
        this.mqttDevices = mqttDevices;
      }
    );   
  }
  
  getMqttDevicesDelayed() {
    setTimeout(()=> { this.getMqttDevices();} , 1000);    
  }
  
  reInitMqttDevices() {
    this.execCommand(this.CMD_INVENTORY);
    this.getMqttDevicesDelayed();
  }

  refreshMqttDevices() {
    this.getMqttDevicesDelayed();
  }
  
  execDeviceCommand(device, command) {
    this.execCommand(command);
    this.reInitMqttDevices();
  }

  // Pages
  getPageIndex(id) {
    if (this.bottomMenus.length == 0) {
      for(let bottomMenu of this.config.configWeb.bottomMenus) {
        this.bottomMenus.push(bottomMenu);
      }
    }
    
    let index = 0;
    for(let bottomMenu of this.bottomMenus) {
      if (bottomMenu.page == id) {
        return index;
      }
      index++;
    }
    return -1;    
  }
  
  getNextPrevPage(selectedPage, next) {
    let index = this.getPageIndex(selectedPage);
    // no swipe on main page (commands)
    if (index == 0) { 
      return selectedPage; 
    }
    if (next) {
      index = (index+1) % this.bottomMenus.length;
    } else {
      if (--index<0) { index = this.bottomMenus.length-1; }
    }
    if (this.bottomMenus.length > 0) {
      let bottomMenu = this.bottomMenus[index];
      if (bottomMenu != null) {
        return bottomMenu.page;
      }
    }
    return selectedPage;
  }
  
  selectNextPage() {
    this.appService.selectPage(this.getNextPrevPage(this.appService.lsOptions.selectedPage, true));
  }

  selectPrevPage() {
    this.appService.selectPage(this.getNextPrevPage(this.appService.lsOptions.selectedPage, false));
  }
  
  // Component tabs
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

  selectNextTab() {
    this.appService.selectTab(this.getNextPrevTab(this.appService.lsOptions.selectedTab, true));
  }

  selectPrevTab() {
    this.appService.selectTab(this.getNextPrevTab(this.appService.lsOptions.selectedTab, false));
  }
}
