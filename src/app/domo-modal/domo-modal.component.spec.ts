import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomoModalComponent } from './domo-modal.component';

describe('DomoModalComponent', () => {
  let component: DomoModalComponent;
  let fixture: ComponentFixture<DomoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
