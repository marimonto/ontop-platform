import { IContractor } from "src/app/core/models/contractor";
import { Iheader } from "src/app/core/models/table";

export const COLUMN_TABLE_LIST: Iheader[] = [
  {
    id: 'contractorName',
    title: 'Contractor name',
  },
  {
    id: 'type',
    title: 'Type',
  },
  {
    id: 'startDate',
    title: 'Start date',
  },
  {
    id: 'amount',
    title: 'Amount',
  },
  {
    id: 'status',
    title: 'Type',
  },
];

export const CONTRACTOR_LIST: IContractor[] = [
  {
    id:'1',
    contractorName: 'Mariana Montoya',
    type: 'Traditional',
    startDate: 'Marzo 4, 2021',
    amount: 400,
    status: 1
  },
  {
    id:'1',
    contractorName: 'Santiago Galeano',
    type: 'Traditional',
    startDate: 'Enero 16, 2022',
    amount: 450,
    status: 1
  },
  {
    id:'1',
    contractorName: 'Claudia Patricia Diaz',
    type: 'Traditional',
    startDate: 'Abril 1, 2021',
    amount: 200,
    status: 2
  }
]
