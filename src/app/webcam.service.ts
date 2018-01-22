import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { OnInit } from '@angular/core';

@Injectable()
export class WebcamService {

  constructor() { }
  
  ngOnInit(){
  }
  
  refreshWebcam(webcam) {
    webcam.sourceRnd = webcam.source+"?random=" + Math.random();
    console.log(webcam.sourceRnd);
  }
  
  getWebcamUrl(webcam): string {
    if (webcam.sourceRnd == undefined) {
      webcam.sourceRnd = webcam.source+"?random=" + Math.random();
    }
    return webcam.sourceRnd;
  }   
}
