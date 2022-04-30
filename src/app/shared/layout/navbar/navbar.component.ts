import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { IDropdown } from 'src/app/core/models/dropdown';
import { DROPDOWNS_ITEMS } from './navbar.constants';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @ViewChild('navbarToggler') navbarToggler!:ElementRef;

  @Input() avatar!: string;

  public navItems: IDropdown[];
  public togglerIcon: IconProp = faBars;
  constructor() {
    this.navItems = JSON.parse(JSON.stringify(DROPDOWNS_ITEMS));
  }

  ngOnInit(): void {}

  navBarTogglerIsVisible() {
    return this.navbarToggler?.nativeElement.offsetParent !== null;
  }
  collapseNav() {
    if (this.navBarTogglerIsVisible()) {
      this.navbarToggler.nativeElement.click();
    }
  }
}
