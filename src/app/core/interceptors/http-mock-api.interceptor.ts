import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { selectHandler } from 'mocks/mock.config';

@Injectable()
export class HttpMockApiInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const mockEndpointHandler = selectHandler(request);
    return mockEndpointHandler ? mockEndpointHandler(request) : next.handle(request);
  }
}
