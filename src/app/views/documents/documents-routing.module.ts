import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from 'src/app/core/Routes/routes';
import { DocumentsComponent } from './documents/documents.component';

const routes: Routes = [
  {
    path: ROUTES.APP.ROUTES.DOCUMENTS.ROUTES.DASHBOARD.PATH,
    component: DocumentsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentsRoutingModule {}
