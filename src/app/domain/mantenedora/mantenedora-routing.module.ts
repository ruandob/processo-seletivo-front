import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MantenedoraListComponent } from "./mantenedora-list/mantenedora-list.component";
import { MantenedoraFormComponent } from "./mantenedora-form/mantenedora-form.component";
import { MantenedoraDetailsComponent } from "./mantenedora-details/mantenedora-details.component";

const MantenedoraRoutes: Routes = [
    { path: '', component: MantenedoraListComponent },
    { path: 'visualizar/:id', component: MantenedoraDetailsComponent },
    { path: 'novo', component: MantenedoraFormComponent },
    { path: 'alterar/:id', component: MantenedoraFormComponent },
];

@NgModule({
    imports: [RouterModule.forChild(MantenedoraRoutes)],
    exports: [RouterModule]
})

export class MantenedoraRouting { }
