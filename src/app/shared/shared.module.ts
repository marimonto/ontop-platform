import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const layoutComponents = [NavbarComponent];
@NgModule({
  declarations: [...layoutComponents],
  exports: [...layoutComponents],
  imports: [CommonModule, FontAwesomeModule],
})
export class SharedModule {}
