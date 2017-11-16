import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { MqttService } from './mqtt.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import dataset from './data';

@Injectable()
export class DomoService {
  config = dataset.config;
   
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
      }
    }
  }
  
  mapStatus = new Map();
  listStatus = [];
  apiUrl = 'http://82.66.49.29:8888/api';
  
  setStatus(key, value) {
    let listCpnt = this.mapStatus.get(key);
    if (listCpnt != undefined) {
      for(let cpnt of listCpnt) {
        console.log("cpnt "+key+" state="+value);
        cpnt.state = value;
      }
    }
  }
  
  updateCpntStatusInMapStatus() {
    this.http.get<any[]>(this.apiUrl+'/statuses')
      .subscribe(statuses => {
        for (let s of statuses) {
          this.setStatus(s[0], s[1]);
        }        
      }
    );   
  }
  
}

/*
  $scope.mapStatus = new Map();
  $scope.listStatus = [];
  
  $scope.setStatus = function(key, value) {
    var listCpnt = $scope.mapStatus.get(key);
    if (listCpnt != undefined) {
      for(var i=0; i<listCpnt.length; i++) {
        var cpnt = listCpnt[i];
        cpnt.state = value;
      }
    }
  };

  $scope.updateCpntStatusWithURL=function(cpnt) {
    if (cpnt!=null && cpnt!=undefined && cpnt.status!=undefined) {
      var url = cpnt.status.url;
      if (url != undefined) {
        $http.get(url).success(function(reponse) {
          var status = reponse.status;
          console.log("Component ["+cpnt.label+"] state:"+status);
          cpnt.state = status;
        });
      }
    }  
  };

  $scope.updateCpntStatusInListStatus=function() {
    for(var i=0; i<$scope.listStatus.length; i++) {
      var cpnt = $scope.listStatus[i];
      $scope.updateCpntStatusWithURL(cpnt);
    }
  };

  $scope.updateCpntStatusInMapStatus=function() {
    $http.get(API_NODE+"/statuses").success(function(reponse) {
      var statuses = reponse;
      console.log("Statuses:"+statuses);
      for(var i=0; i<statuses.length; i++) {
        var status = statuses[i];
        $scope.setStatus(status[0], status[1]);
      }	             
    });
  };
  
  $scope.updateCpntStatus=function(cpnt = null) {
    if (cpnt!=null && cpnt!=undefined && cpnt.status!=undefined && cpnt.status.key==undefined) {
      if (cpnt.status.url != undefined) {
        setTimeout(function() { 
          $scope.updateCpntStatusWithURL(cpnt);
        } , 1000);
      }
    } else {
      setTimeout(function() { 
        $scope.updateCpntStatusInMapStatus();
        if (cpnt == null) {
          $scope.updateCpntStatusInListStatus();
        }
      } , 1000);
    }
  };
  
  $scope.initCpntStatus=function(cpnt) {
    if (cpnt!=null && cpnt!=undefined && cpnt.status!=undefined) {
      if (cpnt.status.key!=undefined) {
        if ($scope.mapStatus.get(cpnt.status.key) == undefined) {
          $scope.mapStatus.set(cpnt.status.key, []); 
        }
        $scope.mapStatus.get(cpnt.status.key).push(cpnt);
      } else {
        $scope.listStatus.push(cpnt);
      }
      $scope.updateCpntStatus(cpnt);
    }
  };
  
  $scope.getComponentClass=function(cptn) {
    var rclass="";
    if ($scope.ctrlState.size==2) { rclass+=" btn-domo-x2"; }
    if (cptn.status!=undefined) {
      if (cptn.state==1 || cptn.state==true) {
        rclass+=" btn-domo-status-on";
      }
      else if (cptn.state==0 || cptn.state==false) {
        rclass+=" btn-domo-status-off";
      }
      else {
        rclass+=" btn-domo-status-undefined";
      }
    }
    return rclass;
  }; 
  $scope.getMenuComponentClass=function(cptn) {
    var rclass="";
    if (cptn != undefined && cptn.type=="separator") { rclass+=" divider"; }
    return rclass;
  }; 
  $scope.getBtnClass=function() {
    if ($scope.ctrlState.size==2) { return "btn-cmd-x2"; } else { return ""; }
  }; 
  $scope.getBtnPopupFormClass=function(cpnt) {
    if ($scope.ctrlState.size==2) { return "btn-popup-form-x2"; } else { return ""; }
  }; 
  $scope.getBtnPopupFormStyle=function() {
//    return {"left": "-50px"};
    return {};
  }; 

*/