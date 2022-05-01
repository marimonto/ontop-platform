import { TableComponent } from './table.component';
import { fireEvent, render, RenderResult } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { ITableData } from 'src/app/core/models/table';
import { By } from '@angular/platform-browser';
import { ListCardComponent } from '../list-card/list-card.component';

describe('TableComponent', () => {
  let tableComponent: RenderResult<TableComponent, TableComponent>;

  const data: ITableData = {
    headers: [
      { id: '1', title: 'firstTitle' },
      { id: '2', title: 'secondTitle' },
    ],
    actions: [{ name: 'name', action: 'action' }],
    rows: [
      {
        showAction: false,
        data: [
          {
            name: '1a',
            img: 'img',
            col: 'col-3',
          },
          {
            name: '1b',
            img: 'img',
            col: 'col-3',
          },
        ],
      },
      {
        showAction: false,
        data: [
          {
            name: '2a',
            img: 'img',
            col: 'col-3',
          },
          {
            name: '2b',
            img: 'img',
            col: 'col-3',
          },
        ],
      },
    ],
  };

  it('should render table', async () => {
    tableComponent = await render(TableComponent, {
      declarations: [ListCardComponent],
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
