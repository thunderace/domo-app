import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DomoModalComponent } from '../domo-modal/domo-modal.component';
import { DomoService } from '../domo.service';
import { MessageService } from '../message.service';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-domo-template',
  templateUrl: './domo-template.component.html',
  styleUrls: ['./domo-template.component.css']
})

export class DomoTemplateComponent implements OnInit {
  @Input() components;
  selectedTab;
  
  constructor(
    private modalService: NgbModal, 
    private domoService: DomoService,
    private messageService: MessageService
    ) {}

  ngOnInit() {
    let selectedComponentTab = localStorage.getItem('selectedComponentTab');
    if (selectedComponentTab != undefined) {
      this.selectedTab = selectedComponentTab;
    }
  }

  clickButton(content, component) {
    if (component.type == "dropdownMenu") {
      const modalRef = this.modalService.open(DomoModalComponent);
      modalRef.componentInstance.component = component;
      modalRef.result.then((result) => {
      }, (reason) => {
      });
    } else {
      this.domoService.execComponentCommand(component);
    }
  }  
  
  beforeChange($event: NgbTabChangeEvent) {
    localStorage.setItem('selectedComponentTab', $event.nextId);
  }
  
  calcStyle(component) {
    let style = {"background-color":"#eee"};
    if (component && component.status && component.status.key) {
      let status = this.domoService.getStatus(component.status.key);
      if (status == 0) {
        style = {"background-color":"#f00"};
      } else if (status == 1) {
        style = {"background-color":"green"};
      }
    }
    return style;
  }
}
