import { RenderResult, render } from '@testing-library/angular';
import { of } from 'rxjs';
import { DashboardContractsComponent } from './dashboard-contracts.component';
import { AuthService } from '../../../core/services/auth/auth.service';
import { ContractsService } from '../../../core/services/contracts/contracts.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContractsFilterComponent } from './components/contracts-filter/contracts-filter.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import '@testing-library/jest-dom';

describe('DashboardContractsComponent', () => {
  let component: RenderResult<
    DashboardContractsComponent,
    DashboardContractsComponent
  >;

  const authServiceMock = { getUser: jest.fn().mockReturnValue(of({})) };
  const contractsServiceMock = {
    getContractors: jest.fn().mockReturnValue(of({})),
  };

  it('should call getUser', async () => {
    component = await render(DashboardContractsComponent, {
      declarations: [DashboardContractsComponent, ContractsFilterComponent],
      imports: [FontAwesomeModule],
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
      schemas: [NO_ERRORS_SCHEMA],
    });
  });
});
