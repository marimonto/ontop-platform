import { SearchInputComponent } from './search-input.component';
import {
  render,
  fireEvent,
  RenderResult,
} from '@testing-library/angular';
import '@testing-library/jest-dom';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ISearchInput } from 'src/app/core/models/form';
import { FormsModule } from '@angular/forms';

describe('SearchInputComponent', () => {
  let searchInputComponent: RenderResult<
    SearchInputComponent,
    SearchInputComponent
  >;
  const data: ISearchInput = { placeholder: 'placeholder' };
  const ngOnchageEvent = jest.fn();

  test('should render input', async () => {
    searchInputComponent = await render(SearchInputComponent, {
      imports: [FontAwesomeModule, FormsModule],
      componentProperties: { data, value: '' },
    });
    const input = searchInputComponent.getByRole('textbox');

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('placeholder', data.placeholder);
    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveValue('');
  });

  test('should change value input', async () => {
    searchInputComponent = await render(SearchInputComponent, {
      imports: [FontAwesomeModule, FormsModule],
      componentProperties: {
        data,
        value: '',
        onChange: {
          emit: ngOnchageEvent,
        } as any,
      },
    });
    const input = searchInputComponent.getByRole('textbox');
    const value = 'new value';
    fireEvent.change(input, { target: { value: 'new value' } });
    expect(input).toHaveValue(value);
  });
});
