import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandPageComponent } from './command-page.component';

describe('CommandPageComponent', () => {
  let component: CommandPageComponent;
  let fixture: ComponentFixture<CommandPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
