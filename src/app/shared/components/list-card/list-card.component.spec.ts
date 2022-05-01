import { render, screen, fireEvent } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IItemList } from 'src/app/core/models/listCard';
import { ListCardComponent } from './list-card.component';

describe('ListCardComponent', () => {
  const items: IItemList[] = [
    { name: 'name1', action: 'action1' },
    { name: 'name2', action: 'action2' },
  ];

  const clickItemEventSpy = jest.fn();

  test('should render ListCardComponent', async () => {
     await render(ListCardComponent, {
      imports: [FontAwesomeModule],
      componentProperties: { items: items },
    });

    const firstItem = screen.getByText('name1');
    const secondItem = screen.getByText('name2');

    expect(firstItem).toBeInTheDocument();
    expect(secondItem).toBeInTheDocument();
  });

  test('should emit event when click button', async () => {
    await render(ListCardComponent, {
      imports: [FontAwesomeModule],
      componentProperties: {
        items,
        clickItemEvent: {
          emit: clickItemEventSpy,
        } as any,
      },
    });

    const firstItem = screen.getByText('name1');

    fireEvent.click(firstItem);

    expect(clickItemEventSpy).toHaveBeenCalledTimes(1);
    expect(clickItemEventSpy).toHaveBeenCalledWith('action1');
  });
});
