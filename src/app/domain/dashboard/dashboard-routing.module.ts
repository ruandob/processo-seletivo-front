import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DashboardComponent} from './dashboard.component';

export const DashBoardRoutes: Routes = [
  {path: '', component: DashboardComponent}
];


@NgModule({
  imports: [RouterModule.forChild(DashBoardRoutes)],
  exports: [RouterModule] 
})
export class DashboardRouting {
}
