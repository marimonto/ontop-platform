import { Component, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent {
  public calendarIcon: IconProp = faCalendarDays;
  public dateRange!: Date[];
  constructor() {}
}
