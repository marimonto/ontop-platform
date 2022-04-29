import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IContractor } from '../../models/contractor';

@Injectable({
  providedIn: 'root',
})
export class ContractsService {
  constructor(private http: HttpClient) {}

  getContractors(): Observable<IContractor[]> {
    return this.http.get<IContractor[]>('https://api/contracts').pipe();
  }
}
