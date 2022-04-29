export interface ITableData {
  headers: Iheader[];
  hasActions: boolean;
  rows: any
}

export interface Iheader {
  id: string;
  title: string;
}
