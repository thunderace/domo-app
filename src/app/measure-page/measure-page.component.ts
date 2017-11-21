import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DomoService } from '../domo.service';
import { MessageService } from '../message.service';
import { MqttService } from '../mqtt.service';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { NgbRadioGroup } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

//import { single, multi } from './data.ts';
/*
export var single = [
  {
    "name": "Germany",
    "value": 8940000
  },
  {
    "name": "USA",
    "value": 5000000
  },
  {
    "name": "France",
    "value": 7200000
  }
];

export var multi = [
  {
    "name": "Germany",
    "series": [
      {
        "name": "2010",
        "value": 7300000
      },
      {
        "name": "2011",
        "value": 8940000
      }
    ]
  },

  {
    "name": "USA",
    "series": [
      {
        "name": "2010",
        "value": 7870000
      },
      {
        "name": "2011",
        "value": 8270000
      }
    ]
  },

  {
    "name": "France",
    "series": [
      {
        "name": "2010",
        "value": 5000002
      },
      {
        "name": "2011",
        "value": 5800000
      }
    ]
  }
];
*/

@Component({
  selector: 'app-measure-page',
  templateUrl: './measure-page.component.html',
  styleUrls: ['./measure-page.component.css']
})
export class MeasurePageComponent implements OnInit {

  model = 1;

  dureeEDF = "24";

  titleEDF = "Mesure conso";
  statsEDF = "xx KWh";
  infoEDF = "...";
  infoClickEDF = "xx ms";

  // ngx-charts
  single: any[];
  multi: any[];

//  view: any[] = [700, 400];
  view: any[] = [1400, 600];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Consommation EDF';
  showYAxisLabel = true;
  yAxisLabel = 'KWh';
  tooltipDisabled = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;
 
  constructor(
    private modalService: NgbModal, 
    private domoService: DomoService,
    private messageService: MessageService,
    private mqttService: MqttService
  ) {
//    Object.assign(this, {single, multi})   
  }
  
  ngOnInit() {
    //console.log("measure ngOnInit");
    this.refreshEDF(24);
  }

  beforeChange($event: NgbTabChangeEvent) {
//    this.messageService.message = "Save selectedComponentTab="+$event.nextId;
//    localStorage.setItem('selectedComponentTab', $event.nextId);
  }
  
  setDureeEDF($event) {
    console.log($event);
  }
  
  refreshEDF(duree) {
    var t1 = Date.now();
    this.dureeEDF = duree;
    this.infoEDF = "Chargement des données...";
    console.log(this.dureeEDF);
    this.domoService.getEDF(this.dureeEDF)
      .subscribe(data => {
        // { time, PAPP }
        console.log(data);
        var dt2 = (Date.now()-t1)/1000;
        
        let tmpData = [
        {
          "name": "EDF",
          "series": []
        },
        {
          "name": "Min",
          "series": []
        },
        {
          "name": "Max",
          "series": []
        },
        {
          "name": "Moyenne",
          "series": []
        }
        ];
        let tMin = null, tMax, vMin, vMax, vCumul, nv = 0;
        for(let v of data) {
          tMax = v.time;
          let papp = parseInt(v.PAPP);
          if (!tMin) { tMin = v.time; vMin=v.PAPP; vMax = papp; }
          if (papp > vMax) { vMax = papp; }
          if (papp < vMin) { vMin = papp; }
          tmpData[0].series.push({"name": v.time, "value": papp});
          nv++;
          vCumul+=papp;
        }
        let vAverage = 0;
        //if (nv>0) { vAverage = vCumul/nv; }
        vAverage = (vMin+vMax)/2;
        tmpData[1].series.push({"name": tMin, "value": vMin});
        tmpData[1].series.push({"name": tMax, "value": vMin});
        tmpData[2].series.push({"name": tMin, "value": vMax});        
        tmpData[2].series.push({"name": tMax, "value": vMax});        
        
        tmpData[3].series.push({"name": tMin, "value": vAverage});        
        tmpData[3].series.push({"name": tMax, "value": vAverage});  
        
        this.multi = tmpData;
        
        var dt3 = (Date.now()-t1)/1000;
        this.infoEDF = "Données chargées en "+dt2+"s";
      }
    );
  }
  
  // ngx-charts
  onSelect(event) {
    console.log(event);
  }  
}
