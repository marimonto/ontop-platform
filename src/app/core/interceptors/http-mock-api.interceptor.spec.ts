import { TestBed } from '@angular/core/testing';

import { HttpMockApiInterceptor } from './http-mock-api.interceptor';

describe('HttpMockApiInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpMockApiInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpMockApiInterceptor = TestBed.inject(HttpMockApiInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
