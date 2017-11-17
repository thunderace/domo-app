import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { DomoModalComponent } from './domo-modal/domo-modal.component';
import { DomoTemplateComponent } from './domo-template/domo-template.component';
import { DomoService } from './domo.service';
import { MessageService } from './message.service';
import { MqttService } from './mqtt.service';
import { MqttComponent } from './mqtt/mqtt.component';
import { CommandPageComponent } from './command-page/command-page.component';
import { WebcamPageComponent } from './webcam-page/webcam-page.component';
import { MeasurePageComponent } from './measure-page/measure-page.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    DomoModalComponent,
    DomoTemplateComponent,
    MqttComponent,
    CommandPageComponent,
    WebcamPageComponent,
    MeasurePageComponent
  ],
  entryComponents: [DomoModalComponent],
  providers: [DomoService, MessageService, MqttService],
  bootstrap: [AppComponent]
})
export class AppModule { }
