import { Component, OnInit } from '@angular/core';
import { DomoService } from '../domo.service';
import { MqttService } from '../mqtt.service';

@Component({
  selector: 'app-config-page',
  templateUrl: './config-page.component.html',
  styleUrls: ['./config-page.component.css']
})
export class ConfigPageComponent implements OnInit {

  mqttFormMessage = { "topic": "home/domo/sonoff01/cmd", "payload": "version" };
  formTopics = ["home/domo/nodedomo/cmd", "home/domo/espIR01/cmd", "home/domo/espIR02/cmd", "home/domo/sonoff01/cmd", "home/domo/sonoff02/cmd", "home/domo/espIR01/event"];
  formPayloads = ["version", "toggle", "irsend marantz C0D", "irsend nec FF000033", "rxIR proto=4 code=811 (12 bits)"];

  constructor(
    private domoService: DomoService,
    private mqttService: MqttService
  ) { 
  }

  ngOnInit() {
  }

}
