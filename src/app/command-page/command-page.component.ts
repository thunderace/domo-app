import { Component, OnInit } from '@angular/core';
import { DomoService } from '../domo.service';

@Component({
  selector: 'app-command-page',
  templateUrl: './command-page.component.html',
  styleUrls: ['./command-page.component.css']
})
export class CommandPageComponent implements OnInit {
  mode = "tabset";
  
  constructor(
    public domoService: DomoService
  ) {}

  ngOnInit(){
  }
}
