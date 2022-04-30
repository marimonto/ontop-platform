import { Component, OnInit } from '@angular/core';
import { IUser } from './core/models/user';
import { AuthService } from './core/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public user!: IUser;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getUser().subscribe((res) => {
      this.user = res;
    });
  }
}
