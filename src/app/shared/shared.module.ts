import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TableComponent } from './components/table/table.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { RouterModule } from '@angular/router';

const layoutComponents = [NavbarComponent];
const uiComponents = [TableComponent, SearchInputComponent, ButtonComponent];
@NgModule({
  declarations: [...layoutComponents, ...uiComponents ],
  exports: [...layoutComponents, ...uiComponents],
  imports: [CommonModule, FontAwesomeModule, FormsModule, RouterModule],
})
export class SharedModule {}
