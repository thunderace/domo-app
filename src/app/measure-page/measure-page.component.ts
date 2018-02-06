import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DomoService } from '../domo.service';
import { MessageService } from '../message.service';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { NgbRadioGroup } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-measure-page',
  templateUrl: './measure-page.component.html',
  styleUrls: ['./measure-page.component.css']
})
export class MeasurePageComponent implements OnInit {

  model = 1;
  dureeEDF = "24";
  titleEDF = "Consommation EDF";
  statsEDF = "";
  infoLoadingEDF = "";
  infoClickEDF = "";
  vMinEDF = 0;
  vMaxEDF = 0;
  vMoyEDF = 0;

  // ngx-charts
  multi = [{
   "name": "EDF",
   "series": []
//   "series": [{"name":"2017-11-22", "value":0},{"name":"2017-11-23", "value":100}]
  }];
  
  view: any[] = [1400, 600];
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // options
  autoScale = true;
  showXAxis = true;
  showYAxis = true;
  gradient  = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Jour/Heure';
  showYAxisLabel = true;
  yAxisLabel = 'KWh';
  tooltipDisabled = false;
  timeline = true;
  yScaleMin = "0";
  yScaleMax = "8000";

  innerWidth;
  innerHeight;
  
  constructor(
    private modalService: NgbModal, 
    private domoService: DomoService,
    private messageService: MessageService
  ) {
  }
  
  ngOnInit() {
    this.refreshEDF(24);
    
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
    this.calcGraphView();
  }

  beforeChange($event: NgbTabChangeEvent) {
//    this.messageService.message = "Save selectedComponentTab="+$event.nextId;
//    localStorage.setItem('selectedComponentTab', $event.nextId);
  }
  
  // @HostListener('window:resize', ['$event'])
  // onResize(event) {
    // this.calcGraphView();
  // }
  
  onResizeDiv(event) {
//    this.innerWidth = window.innerWidth;
    this.innerWidth = event.target.innerWidth;
    this.innerHeight = window.innerHeight;
    //console.log(event.target.innerWidth);
    this.calcGraphView();
  }
      
  calcGraphView() {
    this.innerHeight = window.innerHeight;
    //console.log(window.innerWidth+" "+window.innerHeight);
    let width = Math.round(this.innerWidth*0.9);
    let height = Math.round(this.innerWidth/2.3);
    if (height<400) { height = 400; }
    this.view = [width, height];    
  }
  
  setDureeEDF($event) {
    //console.log($event);
  }
  
  xAxisTickFormatting(value) {
    return value.substring(8, 11)+"/"+value.substring(5, 7)+" "+value.substring(11, 16);
    
    // let minutes = parseInt(value.substring(14, 16));
    // if (minutes <= 25) { 
      // //console.log(">>"+value.substring(0, 16));
      // //return value.substring(0, 15)+"0"; 
      // return value.substring(0, 14)+"00"; 
    // }
    // return null;
  }
  
  refreshEDF(duree) {
    var t1 = Date.now();
    this.dureeEDF = duree;
    this.infoLoadingEDF = "Chargement des données...";
    this.domoService.getEDF(this.dureeEDF)
      .subscribe(data => {
        // { time, PAPP }
        var dt2 = (Date.now()-t1)/1000;
        this.infoLoadingEDF = "Données chargées en "+dt2+"s";
        
        let tmpData = [
        {
          "name": "EDF",
          "series": []
        },
        {
          "name": "Par heure",
          "series": []
        },
        {
          "name": "Moyenne",
          "series": []
        }        

        ];
        let tMin = null, tMax, vMin, vMax;
        let vCumul, nv = 0;
        let timeHour, hour, vHour, nHour = 0;
        vCumul = 0;
        for(let v of data) {
          let papp:number = parseInt(v.PAPP);
          tMin = v.time;
          let tmph = v.time.substring(11, 13);
          if (tmph != hour) {
            if (vHour) {
              // Average per hour
              tmpData[1].series.unshift({"name": timeHour, "value": Math.round(vHour/nHour)});
            }
            hour = tmph;
            timeHour = tMin;
            vHour = papp;
            nHour = 1;
          } else {
            vHour += papp;
            nHour++;
          }
          if (!tMax) { tMax = v.time; vMin = papp; vMax = papp; }
          if (papp > vMax) { vMax = papp; }
          if (papp < vMin) { vMin = papp; }
          if (parseInt(this.dureeEDF)<720) {
            // Each value
            tmpData[0].series.unshift({"name": v.time, "value": papp});
          }
          nv++;
          vCumul = vCumul+papp;
        }
        if (nHour>0) {
          // Average per hour
          tmpData[1].series.unshift({"name": timeHour, "value": Math.round(vHour/nHour)});
          tmpData[1].series.unshift({"name": tMin, "value": Math.round(vHour/nHour)});
        }
        
        let vAverage = 0;
        if (nv>0) { vAverage = Math.round(vCumul/nv); }
        tmpData[2].series.push({"name": tMin, "value": vAverage});        
        tmpData[2].series.push({"name": tMax, "value": vAverage});  
        
        this.multi = tmpData;
        
        var dt3 = (Date.now()-t1)/1000;
        this.infoLoadingEDF = "Données chargées en "+dt3+"s";
        this.statsEDF = "Consommation entre le "+tMin+" et le "+tMax;
        this.vMinEDF = vMin;
        this.vMaxEDF = vMax;
        this.vMoyEDF = vAverage;
      }
    );
  }
  
  onSelect(event) {
    //console.log(event);
  }  
}
