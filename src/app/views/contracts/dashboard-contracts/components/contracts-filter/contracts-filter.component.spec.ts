import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RenderResult, render } from '@testing-library/angular';
import { DatePickerComponent } from '../../../../../shared/components/date-picker/date-picker.component';
import { ContractsFilterComponent } from './contracts-filter.component';
import '@testing-library/jest-dom';

describe('ContractsFilterComponent', () => {
  let component: RenderResult<
    ContractsFilterComponent,
    ContractsFilterComponent
  >;

  it('should render ContractsFilterComponent', async () => {
    component = await render(ContractsFilterComponent, {
      declarations: [DatePickerComponent],
      imports: [FontAwesomeModule],
      schemas: [NO_ERRORS_SCHEMA],
    });

    expect(component.container).toBeInTheDocument();
  });

  it('should render ContractsFilterComponent', async () => {
    component = await render(ContractsFilterComponent, {
      declarations: [DatePickerComponent],
      imports: [FontAwesomeModule],
      schemas: [NO_ERRORS_SCHEMA],
    });

    expect(component.container).toBeInTheDocument();
  });
});
