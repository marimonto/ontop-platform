import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { IUser } from '../../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  getUser(): Observable<IUser> {
    const userInfo = localStorage.getItem('user')
    if(userInfo && userInfo !== null) {
      of(JSON.parse(userInfo))
    }
    return this.http.get<IUser>('https://api/user').pipe(
      map((user) => {
        this.saveUserInfo(user);
        return user;
      })
    );
  }

  saveUserInfo(user: IUser): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUserInfo(user: IUser): void {
    localStorage.getItem('user');
  }
}
