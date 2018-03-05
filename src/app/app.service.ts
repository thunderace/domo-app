import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
  VERSION = "05/03/2018-14:26";  
  SERVER_URL = "http://82.66.49.29";
  
  LS_APP = "ngDomo";
  LS_OPTIONS = this.LS_APP+".lsOptions";
  
  lsOptions = {
    selectedPage: "command-page",
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
  
  selectPage(id) {
    this.lsOptions.selectedPage = id;
    this.saveOptions();
  }    
  
  selectTab(id) {
    this.lsOptions.selectedTab = id;
    this.saveOptions();
  } 

  resetSelectedTab() {
    this.selectTab("tabPrincipal"); 
  }
}
