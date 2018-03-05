import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule }    from '@angular/common/http';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { DomoModalComponent } from './domo-modal/domo-modal.component';
import { DomoTemplateComponent } from './domo-template/domo-template.component';
import { DomoService } from './domo.service';
import { MessageService } from './message.service';
import { MyMqttService } from './mymqtt.service';
import { WebcamService } from './webcam.service';

import { MqttComponent } from './mqtt/mqtt.component';
import { CommandPageComponent } from './command-page/command-page.component';
import { WebcamPageComponent } from './webcam-page/webcam-page.component';
import { MeasurePageComponent } from './measure-page/measure-page.component';
import { ConfigPageComponent } from './config-page/config-page.component';
import { RoomPageComponent } from './room-page/room-page.component';

import 'hammerjs';
import 'hammer-timejs';
import { HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';

// mqtt

import { Observable } from 'rxjs/Observable';
import { MqttMessage, MqttModule, MqttService } from 'ngx-mqtt';
import { ModalDeviceComponent } from './modal-device/modal-device.component';

export const MQTT_SERVICE_OPTIONS = {
  hostname: '82.66.49.29',
  port: 9001,
  path: '/mqtt'
}

export function mqttServiceFactory() {
  return new MqttService(MQTT_SERVICE_OPTIONS);
}

export class MyHammerConfig extends HammerGestureConfig {
  overrides = {
    pan: { direction: 6 },
    pinch: { enable: false },
    rotate: { enable: false }
  };  
}

@NgModule({
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    HttpClientModule,
    NgbCollapseModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    MqttModule.forRoot({
      provide: MqttService,
      useFactory: mqttServiceFactory
    })
  ],
  declarations: [
    AppComponent,
    DomoModalComponent,
    DomoTemplateComponent,
    MqttComponent,
    CommandPageComponent,
    WebcamPageComponent,
    MeasurePageComponent,
    ConfigPageComponent,
    RoomPageComponent,
    ModalDeviceComponent
  ],
  entryComponents: [
    DomoModalComponent, 
    DomoTemplateComponent,
    ModalDeviceComponent
  ],
  providers: [
    AppService, 
    DomoService, 
    MessageService, 
    MyMqttService, 
    WebcamService, 
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    }
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
