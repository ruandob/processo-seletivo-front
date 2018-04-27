import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { DataTablesModule } from 'angular-datatables';
import { SharedModule } from "../../shared/shared.module";

import { ModalModule } from 'ngx-bootstrap/modal';

// Component
import { MantenedoraRouting } from "./mantenedora-routing.module";
import { MantenedoraService } from "./mantenedora.service";
import { MantenedoraDetailsComponent } from "./mantenedora-details/mantenedora-details.component";
import { MantenedoraFormComponent } from "./mantenedora-form/mantenedora-form.component";
import { MantenedoraListComponent } from "./mantenedora-list/mantenedora-list.component";

@NgModule({
  declarations: [
    MantenedoraDetailsComponent,
    MantenedoraFormComponent,
    MantenedoraListComponent
  ],
  imports: [
    // angular
    HttpModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    // plugins
    DataTablesModule,

    // shared
    SharedModule,

    // Component
    MantenedoraRouting
  ],
  providers: [
    // services
    MantenedoraService
  ]
})
export class MantenedoraModule { }
