import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ContractsService } from './contracts.service';

describe('ContractsService', () => {
  let service: ContractsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ContractsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });
  fit('should get all contracts', (done) => {
    const contracts = [
      {
        id: '1',
        contractorName: 'Mariana Montoya',
        type: 'Traditional',
        startDate: 'Marzo 4, 2021',
        amount: 400,
        status: 1,
      },
      {
        id: '1',
        contractorName: 'Santiago Galeano',
        type: 'Traditional',
        startDate: 'Enero 16, 2022',
        amount: 450,
        status: 1,
      },
    ];

    service.getContractors().subscribe((userRes) => {
      expect(userRes).toEqual(contracts);
      done();
    });
    const apiUrl = httpTestingController.expectOne(`https://api/contracts`);
    expect(apiUrl.request.method).toBe('GET');
    apiUrl.flush(contracts);
    httpTestingController.verify();
  });
});
