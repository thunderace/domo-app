import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { DomoService } from '../domo.service';

@Component({
  selector: 'app-room-page',
  templateUrl: './room-page.component.html',
  styleUrls: ['./room-page.component.css']
})
export class RoomPageComponent implements OnInit {

  mode = "room";
  MAX_ANGLE = 50;

  constructor(
    private appService: AppService,
    public domoService: DomoService
  ) {
  }

  ngOnInit(){
  }
  
  onPanEnd(event: any): void {
    //console.log("onPanEnd "+event.angle+","+Math.abs(Math.abs(event.angle)-180));
    if (event.additionalEvent == "panright" && Math.abs(event.angle)<this.MAX_ANGLE) {
      this.appService.selectPrevTab();
    }
    else if (event.additionalEvent == "panleft" && Math.abs(Math.abs(event.angle)-180)<this.MAX_ANGLE) {
      this.appService.selectNextTab();
    }
  }  
}
