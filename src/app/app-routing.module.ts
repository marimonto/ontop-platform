import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from './core/Routes/routes';
import { ContractsModule } from './views/contracts/contracts.module';

const routes: Routes = [
  {
    path: ROUTES.APP.ROUTES.CONTRACTS.PATH,
    loadChildren: () =>
      import('./views/contracts/contracts.module').then((m) => m.ContractsModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ROUTES.APP.ROUTES.HOME.PATH,
  },
  {
    path: '**',
    redirectTo: ROUTES.APP.ROUTES.HOME.PATH,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
