import { Component, Input, OnInit } from '@angular/core';
import { ITableData } from 'src/app/core/models/table';
import { COLUMN_TABLE_LIST } from 'src/app/views/contracts/dashboard-contracts/dashboard-contracts.constants';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() data!: ITableData;

  constructor() {}

  ngOnInit(): void {}
}
