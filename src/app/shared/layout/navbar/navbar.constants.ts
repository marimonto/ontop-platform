import { IDropdown } from 'src/app/core/models/dropdown';
import {
  faUser,
  faFileLines,
  faCreditCard,
  faCalendarMinus,
} from '@fortawesome/free-regular-svg-icons';
import { ROUTES } from '../../../core/Routes/routes';

export const DROPDOWNS_ITEMS: IDropdown[] = [
  {
    name: 'Contracts',
    active: false,
    icon: faUser,
    path: ROUTES.APP.ROUTES.CONTRACTS.FULL_PATH,
    options: [
      {
        name: 'Dashboard',
        path: ROUTES.APP.ROUTES.CONTRACTS.ROUTES.DASHBOARD.FULL_PATH,
      },
    ],
  },
  {
    name: 'Documents',
    active: false,
    icon: faFileLines,
    path: ROUTES.APP.ROUTES.DOCUMENTS.FULL_PATH,
    options: [
      {
        name: 'Show all',
        path: ROUTES.APP.ROUTES.DOCUMENTS.ROUTES.DASHBOARD.FULL_PATH,
      },
    ],
  },
  {
    name: 'Payout',
    active: false,
    icon: faCreditCard,
    path: '/payout',
    options: [
      {
        name: 'Payout',
        path: '/all',
      },
    ],
  },
  {
    name: 'Time',
    active: false,
    icon: faCalendarMinus,
    path:'/time',
    options: [
      {
        name: 'Time',
        path: '/document',
      },
    ],
  },
];
