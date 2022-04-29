export interface ITableData {
  headers: Iheader[];
  hasActions: boolean;
  rows: (string | number)[][];
}

export interface Iheader {
  id: string;
  title: string;
}
