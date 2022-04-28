import { IDropdown } from 'src/app/core/models/dropdown';
import {
  faUser,
  faFileLines,
  faCreditCard,
  faCalendarMinus,
} from '@fortawesome/free-regular-svg-icons';

export const DROPDOWNS_ITEMS: IDropdown[] = [
  {
    name: 'Contracts',
    active: false,
    icon: faUser,
    options: [
      {
        name: 'Users',
        route: '/user',
      },
    ],
  },
  {
    name: 'Documents',
    active: false,
    icon: faFileLines,
    options: [
      {
        name: 'Documents',
        route: '/document',
      },
    ],
  },
  {
    name: 'Payout',
    active: false,
    icon: faCreditCard,
    options: [
      {
        name: 'Payout',
        route: '/document',
      },
    ],
  },
  {
    name: 'Time',
    active: false,
    icon: faCalendarMinus,
    options: [
      {
        name: 'Time',
        route: '/document',
      },
    ],
  },
];
