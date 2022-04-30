import {
  faSlidersH,
  faEllipsisV,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';

import { IButton } from 'src/app/core/models/button';
import { ISearchInput } from 'src/app/core/models/form';
import { Iheader } from 'src/app/core/models/table';

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
    title: 'Staus',
  },
];

export const SEARCH_INPUT: ISearchInput = {
  placeholder: 'Search',
  maxLength: 20,
};
export const FILTER_BUTTON: IButton = {
  backgroundColor: '#ebebeb',
  color: '#1c0b11',
  text: 'Filter',
  icon: faSlidersH,
  height: '58px',
  width: '111px',
};
export const ADD_BUTTON: IButton = {
  backgroundColor: '#ff5a70',
  color: 'white',
  text: 'New hire',
  icon: faPlus,
  height: '58px',
  width: '192px',
  fontWeight: 700,
};
