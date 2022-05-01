import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AuthService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });
  it('should get user', (done) => {
    const user = {
      name: 'Mariana',
      companyName: 'FBS',
      avatar: '',
    };

    service.getUser().subscribe((userRes) => {
      expect(userRes).toEqual(user);
      done();
    });
    const apiUrl = httpTestingController.expectOne(`https://api/user`);
    expect(apiUrl.request.method).toBe('GET');
    apiUrl.flush(user);
    httpTestingController.verify();
  });
});
