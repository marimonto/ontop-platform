import { Component, Input, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { ITableData } from 'src/app/core/models/table';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-table-card',
  templateUrl: './table-card.component.html',
  styleUrls: ['./table-card.component.scss'],
})
export class TableCardComponent implements OnInit {
  @Input() data!: ITableData;
  @Input() index!: number;

  public actionsIcon: IconProp = faEllipsisH;

  constructor() {}

  ngOnInit(): void {}

  openActions() {
    this.data.rows = this.data.rows.map((row, i: number) => {
      return {
        ...row,
        showAction: this.index === i,
      };
    });
  }
}
