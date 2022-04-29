import { Component, OnInit } from '@angular/core';
import { IButton } from '../../../core/models/button';
import { IContractor } from '../../../core/models/contractor';
import { ISearchInput } from '../../../core/models/form';
import { ITableData } from '../../../core/models/table';
import { AuthService } from '../../../core/services/auth/auth.service';
import { ContractsService } from '../../../core/services/contracts/contracts.service';
import {
  ADD_BUTTON,
  COLUMN_TABLE_LIST,
  FILTER_BUTTON,
  SEARCH_INPUT,
} from './dashboard-contracts.constants';

@Component({
  selector: 'app-dashboard-contracts',
  templateUrl: './dashboard-contracts.component.html',
  styleUrls: ['./dashboard-contracts.component.scss'],
})
export class DashboardContractsComponent implements OnInit {
  public tableData!: ITableData;
  public company!: string;
  public searchInput: ISearchInput = SEARCH_INPUT;
  public filterButton: IButton = FILTER_BUTTON;
  public addButton: IButton = ADD_BUTTON;
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
