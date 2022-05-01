import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractsRoutingModule } from './contracts-routing.module';
import { DashboardContractsComponent } from './dashboard-contracts/dashboard-contracts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContractsFilterComponent } from './dashboard-contracts/components/contracts-filter/contracts-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DashboardContractsComponent, ContractsFilterComponent],
  imports: [
    CommonModule,
    ContractsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class ContractsModule {}
