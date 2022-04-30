import { IItemList } from "./listCard";

export interface ITableData {
  headers: Iheader[];
  actions?: IItemList[];
  rows: any[];
}

export interface Iheader {
  id: string;
  title: string;
  col?: string;
}

