import { HttpRequest, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import * as countries from './data/contractors.json';
import * as user from './data/user.json';

const getContractors = (request: HttpRequest<any>) => {
  return of(
    new HttpResponse({
      status: 200,
      body: (countries as any).default,
    })
  );
};

const getUser = (request: HttpRequest<any>) => {
  return of(
    new HttpResponse({
      status: 200,
      body: (user as any).default,
    })
  );
};
/* const getCountry = (request: HttpRequest<any>) => {
  const id = extractIdPathParamFromUrl(request);
  const country = countries.find(c => c.id === id);
  return of(new HttpResponse({
    status: 200, body: country
  }));
}; */
/* const extractIdPathParamFromUrl = (request: HttpRequest<any>) => {
  const requestUrl = new URL(request.url);
  return requestUrl.pathname.split('/').pop();
}; */
export const selectHandler = (request: HttpRequest<any>) => {
  const requestUrl = new URL(request.url);
  switch (request.method) {
    case 'GET':
      const pathname = requestUrl.pathname;

      if (pathname === '/contractors') {
        return getContractors;
      }
      if (pathname === '/user') {
        return getUser;
      }
      return null;

    default:
      return null;
  }
};
