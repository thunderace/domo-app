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

@Component({
  selector: 'app-measure-page',
  templateUrl: './measure-page.component.html',
  styleUrls: ['./measure-page.component.css']
})
export class MeasurePageComponent implements OnInit {

  model = 1;

  dureeEDF = "24";

  titleEDF = "Consommation EDF";
  statsEDF = "xx KWh";
  infoEDF = "...";
  infoClickEDF = "xx ms";

  // ngx-charts
  multi = [{
   "name": "EDF",
   "series": []
//   "series": [{"name":"2017-11-22", "value":0},{"name":"2017-11-23", "value":100}]
  }];
  
//  view: any[] = [700, 400];
  view: any[] = [1400, 600];
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // options
  autoScale = true;
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Jour/Heure';
  showYAxisLabel = true;
  yAxisLabel = 'KWh';
  tooltipDisabled = false;
  timeline = true;
  yScaleMin = "0";
  //yScaleMax = "3000";
 
  constructor(
    private modalService: NgbModal, 
    private domoService: DomoService,
    private messageService: MessageService,
    private mqttService: MqttService
  ) {
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
  
  xAxisTickFormatting(value) {
    return value.substring(11, 16);
    // if (this.dureeEDF == "24" || this.dureeEDF == "48") {
     // return value.substring(11, 16);
    // }
    // return value.substring(0, 11);
  }
  
  refreshEDF(duree) {
    var t1 = Date.now();
    this.dureeEDF = duree;
    this.infoEDF = "Chargement des données...";
//    console.log(this.dureeEDF);
    this.domoService.getEDF(this.dureeEDF)
      .subscribe(data => {
        // { time, PAPP }
//        console.log(data);
        var dt2 = (Date.now()-t1)/1000;
        this.infoEDF = "Données chargées en "+dt2+"s";
        
        let tmpData = [
        {
          "name": "EDF",
          "series": []
        }/*,
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
        }*/
        ];
        let tMin = null, tMax, vMin, vMax;
        let vCumul, nv = 0;
//        let vCumul, nv: number = 0;
        for(let v of data) {
          tMin = v.time;
          let papp:number = parseInt(v.PAPP);
          if (!tMax) { tMax = v.time; vMin = papp; vMax = papp; }
          if (papp > vMax) { vMax = papp; }
          if (papp < vMin) { vMin = papp; }
          tmpData[0].series.unshift({"name": v.time, "value": papp});
          nv++;
          vCumul+=papp;
        }
        let vAverage = 0;
        //if (nv>0) { vAverage = Math.round(vCumul/nv); }
        vAverage = (vMin+vMax)/2;
/*        
        tmpData[1].series.push({"name": tMin, "value": vMin});
        tmpData[1].series.push({"name": tMax, "value": vMin});
        tmpData[2].series.push({"name": tMin, "value": vMax});        
        tmpData[2].series.push({"name": tMax, "value": vMax});        
        
        tmpData[3].series.push({"name": tMin, "value": vAverage});        
        tmpData[3].series.push({"name": tMax, "value": vAverage});  
*/        
        this.multi = tmpData;
        
        var dt3 = (Date.now()-t1)/1000;
        this.infoEDF = "Données chargées en "+dt2+"s et affichées en "+dt3+"s";
        this.statsEDF = "Consommation entre le "+tMin+" et le "+tMax+" Min="+vMin+" kWh "+" Moy="+vCumul+" kWh "+" Max="+vMax+" kWh ";
      }
    );
  }
  
  // ngx-charts
  onSelect(event) {
    console.log(event);
  }  
}
