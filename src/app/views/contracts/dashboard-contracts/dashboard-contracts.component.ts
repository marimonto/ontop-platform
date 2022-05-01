import { Component, OnInit } from '@angular/core';
import { StatusContractor } from '../../../core/enums/contracts';
import { IButton } from '../../../core/models/button';
import { IContractor } from '../../../core/models/contractor';
import { ISearchInput } from '../../../core/models/form';
import { ITableData } from '../../../core/models/table';
import { AuthService } from '../../../core/services/auth/auth.service';
import { ContractsService } from '../../../core/services/contracts/contracts.service';
import {
  ACTIONS,
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
  public isShowFilter: boolean;

  constructor(
    private contractsService: ContractsService,
    private authService: AuthService
  ) {
    this.isShowFilter = false;
  }

  ngOnInit(): void {
    this.getContractInfo();
    this.getDataUser();
  }

  getContractInfo(): void {
    this.contractsService.getContractors().subscribe((res: IContractor[]) => {
      this.tableData = {
        headers: COLUMN_TABLE_LIST,
        actions: ACTIONS,
        rows: this.getRows(res),
      };
    });
  }
  getDataUser(): void {
    this.authService.getUser().subscribe((res) => {
      this.company = res.companyName;
    });
  }

  onClickFilter(): void {
    this.isShowFilter = !this.isShowFilter;
  }

  getRows(contractorList: IContractor[]): any {
    return contractorList.map((contractor: IContractor) => {
      return {
        showAction: false,
        data: [
          {
            name: contractor.contractorName,
            img: contractor.photo,
            col: 'col-3',
          },
          {
            name: contractor.type,
          },
          {
            name: contractor.startDate,
          },
          {
            name: contractor.amount,
            col: 'col',
          },
          {
            name: StatusContractor[contractor.status],
            col: 'col-2',
            class: contractor.status === 'SC-01' ? 'col-success' : 'col-danger',
          },
        ],
      };
    });
  }
}
