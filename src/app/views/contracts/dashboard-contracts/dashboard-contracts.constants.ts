import {
  faSlidersH,
  faPlus,
  faPenClip,
  faSignature,
} from '@fortawesome/free-solid-svg-icons';
import { faFileLines, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { IButton } from 'src/app/core/models/button';
import { ISearchInput } from 'src/app/core/models/form';
import { IItemList } from 'src/app/core/models/listCard';
import { Iheader } from 'src/app/core/models/table';

export const COLUMN_TABLE_LIST: Iheader[] = [
  {
    id: 'contractorName',
    title: 'Contractor name',
    col: 'col-3',
  },
  {
    id: 'type',
    title: 'Type',
    col: 'col',
  },
  {
    id: 'startDate',
    title: 'Start date',
    col: 'col',
  },
  {
    id: 'amount',
    title: 'Amount',
    col: 'col',
  },
  {
    id: 'status',
    title: 'Status',
    col: 'col-2',
  },
];

export const ACTIONS: IItemList[] = [
  {
    name: 'Edit',
    action: 'edit',
    icon: faPenClip,
  },
  {
    name: 'Sign',
    action: 'sign',
    icon: faSignature,
  },
  {
    name: 'View summary',
    action: 'summary',
    icon: faFileLines,
  },
  {
    name: 'Delete',
    action: 'delete',
    icon: faTrashCan,
    class: 'icon-primary'
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
