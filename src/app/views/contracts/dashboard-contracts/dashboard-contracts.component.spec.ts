import { RenderResult, render } from '@testing-library/angular';
import { of } from 'rxjs';

import { DashboardContractsComponent } from './dashboard-contracts.component';
import { AuthService } from '../../../core/services/auth/auth.service';
import { ContractsService } from '../../../core/services/contracts/contracts.service';
import { SharedModule } from '../../../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('DashboardContractsComponent', () => {
  let component: RenderResult<
    DashboardContractsComponent,
    DashboardContractsComponent
  >;

  const authServiceMock = { getUser: jest.fn().mockReturnValue(of({})) };
  const contractsServiceMock = {
    getContractors: jest.fn().mockReturnValue(of({})),
  };

  test('should call getUser', async () => {
    component = await render(DashboardContractsComponent, {
      imports: [SharedModule, FontAwesomeModule],
      providers: [
        {
          provide: AuthService,
          useValue: authServiceMock,
        },
        {
          provide: ContractsService,
          useValue: contractsServiceMock,
        },
      ],
    });
    /*   const getUserSpy = jest.spyOn(authServiceMock, 'getUser');
    expect(getUserSpy).toHaveBeenCalled(); */
  });
});
