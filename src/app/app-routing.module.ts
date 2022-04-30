import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from './core/Routes/routes';

const routes: Routes = [
  {
    path: ROUTES.APP.ROUTES.CONTRACTS.PATH,
    loadChildren: () =>
      import('./views/contracts/contracts.module').then(
        (m) => m.ContractsModule
      ),
  },
  {
    path: ROUTES.APP.ROUTES.DOCUMENTS.PATH,
    loadChildren: () =>
      import('./views/documents/documents.module').then(
        (m) => m.DocumentsModule
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ROUTES.APP.ROUTES.CONTRACTS.ROUTES.DASHBOARD.FULL_PATH,
  },
  {
    path: '**',
    redirectTo: ROUTES.APP.ROUTES.CONTRACTS.ROUTES.DASHBOARD.FULL_PATH,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
