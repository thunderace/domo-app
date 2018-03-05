import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DomoService } from '../domo.service';

@Component({
  selector: 'app-domo-modal',
  templateUrl: './domo-modal.component.html',
  styleUrls: ['./domo-modal.component.css']
  
})
export class DomoModalComponent implements OnInit {
  @Input() component;
  
  constructor(
    public activeModal: NgbActiveModal,
    private domoService: DomoService
    ) {
    }

  ngOnInit() {
  }
  
  getComponents() {
    return this.domoService.findComponents(this.component);
  }
}
