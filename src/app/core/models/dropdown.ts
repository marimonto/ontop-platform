import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface IDropdownNav {
  name: string;
  active?: false;
  icon?: IconProp;
  path: string;
  options: [
    {
      name: string;
      path: string;
    }
  ];
}

export interface IDropdown {
  name: string;
  value: string;
}
