import { Component, Input, OnInit } from '@angular/core';
import { IDropdown } from 'src/app/core/models/dropdown';
import { DROPDOWNS_ITEMS } from './navbar.constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() avatar!: string;

  public navItems: IDropdown[];

  constructor() {
    this.navItems = JSON.parse(JSON.stringify(DROPDOWNS_ITEMS));
  }

  ngOnInit(): void {}
}
