import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const appRoutes: Routes = [

  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', loadChildren: 'app/domain/dashboard/dashboard.module#DashboardModule'},
  {path: 'mantenedora', loadChildren: 'app/domain/mantenedora/mantenedora.module#MantenedoraModule'}

];

/*
children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: 'dashboard', loadChildren: 'app/domain/dashboard/dashboard.module#DashboardModule'},
      {path: 'pais', loadChildren: 'app/domain/pais/pais.module#PaisModule'},
      {path: 'estado', loadChildren: 'app/domain/estado/estado.module#EstadoModule'}
    ]
*/

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
