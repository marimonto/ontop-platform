import { Component, Input, OnInit } from '@angular/core';
import { ITableData } from 'src/app/core/models/table';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() data!: ITableData;

  public actionsIcon: IconProp = faEllipsisV;

  constructor() {}

  ngOnInit(): void {}

  openActions(index: number) {

    this.data.rows = this.data.rows.map((row, i: number) => {
      return {
        ...row,
        showAction: index === i,
      };
    });
  }
}
