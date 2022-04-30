import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ISearchInput } from 'src/app/core/models/form';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchInputComponent),
      multi: true,
    },
  ],
})
export class SearchInputComponent {
  public val: string = '';
  public closeIcon: IconProp = faCircleXmark;

  @Input() data!: ISearchInput;

  constructor() {}

  clear() {
    this.value = '';
  }

  onChange: any = () => {};

  onTouch: any = () => {};

  set value(value: string) {
    if (value !== undefined && this.val !== value) {
      this.val = value?.trim() || value;
      this.onChange(this.val);
      this.onTouch(this.val);
    }
  }

  get value() {
    return this.val;
  }

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }
}
