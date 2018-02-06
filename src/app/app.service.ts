import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
  LS_APP = "ngDomo";
  LS_OPTIONS = this.LS_APP+".lsOptions";
  
  lsOptions = {
    selectedTab: "tabPrincipal",
    synchroMqtt: true
  }
 
  constructor(
  ) { 
    this.loadOptions();
  }

  loadOptions() {
    let lsOptions = JSON.parse(localStorage.getItem(this.LS_OPTIONS));
    if (lsOptions == undefined) { 
      this.saveOptions(); 
    } else {
      this.lsOptions = lsOptions;
    }    
  }

  saveOptions() {
    localStorage.setItem(this.LS_OPTIONS, JSON.stringify(this.lsOptions));
  }
  
  selectTab(id) {
    this.lsOptions.selectedTab = id;
    this.saveOptions();
  } 

  resetSelectedTab() {
    this.selectTab("tabPrincipal"); 
  }
}
