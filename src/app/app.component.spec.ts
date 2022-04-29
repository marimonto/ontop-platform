import { AppComponent } from './app.component';
import { render, RenderResult } from '@testing-library/angular';
import { AuthService } from './core/services/auth/auth.service';
import { of } from 'rxjs';
import { NavbarComponent } from './shared/layout/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('AppComponent', () => {
  let appComponent: RenderResult<AppComponent, AppComponent>;

  const authServiceMock = { getUser: jest.fn().mockReturnValue(of({})) };

  test('should call getUser', async () => {
    appComponent = await render(AppComponent, {
      declarations: [NavbarComponent],
      imports: [FontAwesomeModule],
      providers: [
        {
          provide: AuthService,
          useValue: authServiceMock,
        },
      ],
    });
    const getUserSpy = jest.spyOn(authServiceMock, 'getUser');
    expect(getUserSpy).toHaveBeenCalled();
  });
});
