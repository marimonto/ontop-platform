import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { render, RenderResult } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { ITableData } from 'src/app/core/models/table';
import { By } from '@angular/platform-browser';

describe('TableComponent', () => {
  let tableComponent: RenderResult<TableComponent, TableComponent>;
  const data: ITableData = {
    headers: [
      { id: '1', title: 'firstTitle' },
      { id: '2', title: 'secondTitle' },
    ],
    hasActions: true,
    rows: [
      ['1a', '1b'],
      ['2a', '2b'],
    ],
  };

  fit('should render table', async () => {
    tableComponent = await render(TableComponent, {
      imports: [FontAwesomeModule, FormsModule],
      componentProperties: { data },
    });

    const debugElement = tableComponent.fixture.debugElement;
    const table = debugElement.query(By.css('.table-container')).nativeElement;
    const columns = debugElement.queryAll(By.css('.col-header'));

    const rowsData = debugElement.queryAll(By.css('.row-data'));

    expect(table).toBeInTheDocument();
    expect(columns.length).toEqual(3);
    expect(rowsData.length).toEqual(data.rows.length);
  });
});
