import { Component, OnInit } from '@angular/core';
import { DomoService } from '../domo.service';

@Component({
  selector: 'app-room-page',
  templateUrl: './room-page.component.html',
  styleUrls: ['./room-page.component.css']
})
export class RoomPageComponent implements OnInit {

  mode = "room";

  constructor(
    public domoService: DomoService
  ) {
    
  }

  ngOnInit(){
  }
}
