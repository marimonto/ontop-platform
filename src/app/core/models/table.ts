import { IItemList } from './listCard';

export interface ITableData {
  headers: Iheader[];
  actions?: IItemList[];
  rows: {
    data: any[];
    showAction: boolean;
  }[];
}

export interface Iheader {
  id: string;
  title: string;
  col?: string;
}
