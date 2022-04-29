import { ButtonComponent } from './button.component';
import { render, screen, fireEvent } from '@testing-library/angular';
import { IButton } from 'src/app/core/models/button';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
import '@testing-library/jest-dom';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('ButtonComponent', () => {
  const data: IButton = {
    backgroundColor: 'red',
    color: 'black',
    text: 'text',
    icon: faSlidersH,
    height: '10px',
    width: '10px',
  };

  const buttonClickSpy = jest.fn();

  test('should render button', async () => {
    await render(ButtonComponent, {
      imports: [FontAwesomeModule],
      componentProperties: { data },
    });

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(data.text);


  });

  test('should emit event when click button', async () => {
    await render(ButtonComponent, {
      imports: [FontAwesomeModule],
      componentProperties: {
        data,
        clicButtonEvent: {
          emit: buttonClickSpy,
        } as any,
      },
    });

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(buttonClickSpy).toHaveBeenCalledTimes(1);
  });
});
