import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { MqttService } from './mqtt.service';
import { WebcamService } from './webcam.service';

import { MqttComponent } from './mqtt/mqtt.component';
import { CommandPageComponent } from './command-page/command-page.component';
import { WebcamPageComponent } from './webcam-page/webcam-page.component';
import { MeasurePageComponent } from './measure-page/measure-page.component';
import { ConfigPageComponent } from './config-page/config-page.component';
import { RoomPageComponent } from './room-page/room-page.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
    BrowserAnimationsModule
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
    RoomPageComponent
  ],
  entryComponents: [DomoModalComponent, DomoTemplateComponent],
  providers: [AppService, DomoService, MessageService, MqttService, WebcamService],
  bootstrap: [AppComponent]
})

export class AppModule { }
