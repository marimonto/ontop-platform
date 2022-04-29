import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IContractor } from 'src/app/core/models/contractor';
import { Iheader, ITableData } from 'src/app/core/models/table';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { ContractsService } from 'src/app/core/services/contracts/contracts.service';
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
  public company!: string;

  constructor(
    private contractsService: ContractsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getContractInfo();
    this.getDataUser();
  }

  getContractInfo(): void {
    this.contractsService.getContractors().subscribe((res: IContractor[]) => {
      this.tableData = {
        headers: COLUMN_TABLE_LIST,
        hasActions: true,
        rows: this.getRows(res),
      };
    });
  }
  getDataUser(): void {
    this.authService.getUser().subscribe((res) => {
      console.log(res);
      this.company = res.companyName;
    });
  }

  getRows(contractorList: IContractor[]): any {
    return contractorList.map((contractor: IContractor) => {
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
