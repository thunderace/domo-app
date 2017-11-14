import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DomoModalComponent } from '../domo-modal/domo-modal.component';
import { DomoService } from '../domo.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-domo-template',
  templateUrl: './domo-template.component.html',
  styleUrls: ['./domo-template.component.css']
})
export class DomoTemplateComponent implements OnInit {
  @Input() component;
  
  constructor(
    private modalService: NgbModal, 
    private domoService: DomoService,
    private messageService: MessageService
    ) {}

  ngOnInit() {
  }

  clickButton(content, component) {
    if (component.type == "dropdownMenu") {
      const modalRef = this.modalService.open(DomoModalComponent);
      modalRef.componentInstance.component = component;
      modalRef.result.then((result) => {
//        this.debug = "Modal "+component.id;
      }, (reason) => {
      });
    } else {
//      this.messageService.message = "Exec "+component.label;
      this.domoService.execComponentCommand(component);
//        this.debug = "Click "+component.id;
    }
  }  
}
