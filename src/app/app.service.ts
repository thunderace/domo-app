import { Injectable } from '@angular/core';
import { DomoService } from './domo.service';

@Injectable()
export class AppService {
  selectedTab = "tabPrincipal";
  
  constructor(
    private domoService: DomoService
  ) { 
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
  
  selectNextTab() {
    this.selectTab(this.domoService.getNextTab(this.selectedTab));
  }

  selectPrevTab() {
    this.selectTab(this.domoService.getPrevTab(this.selectedTab));
  }  
}
