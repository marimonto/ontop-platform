import { Component, Input, OnInit } from '@angular/core';
import { IItemList } from 'src/app/core/models/listCard';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})
export class ListCardComponent implements OnInit {

  @Input() items!: IItemList[]
  constructor() { }

  ngOnInit(): void {
  }

}
