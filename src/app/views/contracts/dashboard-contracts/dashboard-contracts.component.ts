import { Component, OnInit } from '@angular/core';
import { IContractor } from 'src/app/core/models/contractor';
import { Iheader, ITableData } from 'src/app/core/models/table';
import {
  COLUMN_TABLE_LIST,
  CONTRACTOR_LIST,
} from './dashboard-contracts.constants';

@Component({
  selector: 'app-dashboard-contracts',
  templateUrl: './dashboard-contracts.component.html',
  styleUrls: ['./dashboard-contracts.component.scss'],
})
export class DashboardContractsComponent implements OnInit {
  public tableData!: ITableData;
  constructor() {}

  ngOnInit(): void {
    this.getContractInfo();
  }

  getContractInfo(): void {
    this.tableData = {
      headers: COLUMN_TABLE_LIST,
      hasActions: true,
      rows: this.getRows(),
    };
    console.log(this.tableData);
  }

  getRows(): any {
    return CONTRACTOR_LIST.map((contractor: IContractor) => {
      return [
        contractor.contractorName,
        contractor.type,
        contractor.startDate,
        contractor.amount,
        contractor.status,
      ];
    });
  }
}
