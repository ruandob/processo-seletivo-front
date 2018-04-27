import { Component, OnInit, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs/Subject';

//MODAL
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { DATATABLE_OPTIONS } from '../../../app.api';

import { MantenedoraService } from "../mantenedora.service";
import { Mantenedora } from "../mantenedora";

@Component({
  selector: 'app-mantenedora-list',
  templateUrl: './mantenedora-list.component.html',
  styleUrls: ['./mantenedora-list.component.css']
})
export class MantenedoraListComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<Mantenedora> = new Subject();

  modalRef: BsModalRef;

  selectedMantenedora: Mantenedora;
  selectedIndex: number;
  mantenedoras: Mantenedora[];

  constructor(
    private modalService: BsModalService,
    public mantenedoraService: MantenedoraService
  ) { }

  ngOnInit() {

    // this.layout.title = 'Lista de Mantenedoras';
    this.dtOptions = DATATABLE_OPTIONS;

    this.mantenedoraService.findAll()
      .subscribe(mantenedoras => {
        this.mantenedoras = mantenedoras;
        this.dtTrigger.next();
      });

  }

  openModal(template: TemplateRef<any>, mantenedora: Mantenedora, index: number) {
    this.selectedMantenedora = mantenedora;
    this.selectedIndex = index;
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  deleteMantenedora(): void {

    this.mantenedoraService.delete(this.selectedMantenedora.id)
      .subscribe(response => {
        this.mantenedoras.splice(this.selectedIndex, 1);
        this.modalRef.hide();

      });
  }

  hideModal(): void {
    this.modalRef.hide();
  }

}
