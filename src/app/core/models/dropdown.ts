import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface IDropdown {
  name: string;
  active?: false;
  icon?: IconProp;
  path: string;
  options: [{
    name: string;
    path: string;
  }];
}
