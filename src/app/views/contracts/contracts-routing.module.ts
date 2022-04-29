import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from 'src/app/core/routes/routes';
import { DashboardContractsComponent } from './dashboard-contracts/dashboard-contracts.component';

const routes: Routes = [
  {
    path: ROUTES.APP.ROUTES.CONTRACTS.ROUTES.DASHBOARD.PATH,
    component: DashboardContractsComponent,
  },
  {
    path: '**',
    redirectTo: ROUTES.APP.ROUTES.CONTRACTS.ROUTES.DASHBOARD.PATH,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContractsRoutingModule {}
