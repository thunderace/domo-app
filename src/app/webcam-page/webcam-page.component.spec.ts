import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebcamPageComponent } from './webcam-page.component';

describe('WebcamPageComponent', () => {
  let component: WebcamPageComponent;
  let fixture: ComponentFixture<WebcamPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebcamPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebcamPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
