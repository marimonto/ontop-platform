import { Component, OnInit } from '@angular/core';
import {
  StatusContractorList,
  TypeContractorList,
} from '../../../../../core/enums/contracts';
import { IDropdown } from '../../../../../core/models/dropdown';

@Component({
  selector: 'app-contracts-filter',
  templateUrl: './contracts-filter.component.html',
  styleUrls: ['./contracts-filter.component.scss'],
})
export class ContractsFilterComponent implements OnInit {
  public contractTypeList: IDropdown[];
  public contractStatusList: IDropdown[];
  constructor() {
    this.contractTypeList = TypeContractorList;
    this.contractStatusList = StatusContractorList;
  }

  ngOnInit(): void {}
}
