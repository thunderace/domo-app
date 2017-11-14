import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomoTemplateComponent } from './domo-template.component';

describe('DomoTemplateComponent', () => {
  let component: DomoTemplateComponent;
  let fixture: ComponentFixture<DomoTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomoTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomoTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
