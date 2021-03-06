import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TableComponent } from './components/table/table.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { RouterModule } from '@angular/router';
import { ListCardComponent } from './components/list-card/list-card.component';
import { TableCardComponent } from './components/table-card/table-card.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

const layoutComponents = [NavbarComponent];
const uiComponents = [
  TableComponent,
  SearchInputComponent,
  ButtonComponent,
  ListCardComponent,
  TableCardComponent,
  DatePickerComponent,

];
@NgModule({
  declarations: [...layoutComponents, ...uiComponents],
  exports: [...layoutComponents, ...uiComponents],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
  ],
})
export class SharedModule {}
