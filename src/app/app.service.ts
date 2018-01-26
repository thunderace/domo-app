import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
  selectedTab = "tabPrincipal";
  
  constructor() { 
    let selectedComponentTab = localStorage.getItem('selectedComponentTab');
    if (selectedComponentTab == undefined || selectedComponentTab == "tabMaison") { 
      this.resetSelectedTab(); 
    } else {
      this.selectedTab = selectedComponentTab;
    }
  }
  
  selectTab(id) {
    this.selectedTab = id;
    localStorage.setItem('selectedComponentTab', id);
  } 

  resetSelectedTab() {
    this.selectTab("tabPrincipal"); 
  }    
}
