import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IButton } from 'src/app/core/models/button';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() data!: IButton;
  @Output() clicButtonEvent = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onClick(): void {
    this.clicButtonEvent.emit();
  }
}
