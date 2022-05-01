import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RenderResult, render } from '@testing-library/angular';
import { DatePickerComponent } from './date-picker.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import '@testing-library/jest-dom';


describe('DatePickerComponent', () => {
  let component: RenderResult<DatePickerComponent, DatePickerComponent>;

  it('should render DatePickerComponent', async () => {
    component = await render(DatePickerComponent, {
      declarations: [],
      imports: [FontAwesomeModule],
      providers: [],
      schemas: [NO_ERRORS_SCHEMA]
    });

    expect(component).toBeTruthy();
  });
});
