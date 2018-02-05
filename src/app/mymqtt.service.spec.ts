import { TestBed, inject } from '@angular/core/testing';

import { MyMqttService } from './mymqtt.service';

describe('MyMqttService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyMqttService]
    });
  });

  it('should be created', inject([MyMqttService], (service: MyMqttService) => {
    expect(service).toBeTruthy();
  }));
});
