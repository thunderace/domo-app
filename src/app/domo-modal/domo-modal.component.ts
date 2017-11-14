import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-domo-modal',
  templateUrl: './domo-modal.component.html',
  styleUrls: ['./domo-modal.component.css']
  
})
export class DomoModalComponent implements OnInit {
  @Input() component;
  
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
  }

}
