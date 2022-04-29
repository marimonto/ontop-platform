import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TableComponent } from './components/table/table.component';

const layoutComponents = [NavbarComponent];
const uiComponents = [TableComponent];
@NgModule({
  declarations: [...layoutComponents, ...uiComponents],
  exports: [...layoutComponents, ...uiComponents],
  imports: [CommonModule, FontAwesomeModule],
})
export class SharedModule {}
