import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface IDropdown {
  name: string;
  active?: false;
  icon?: IconProp;
  options: [{
    name: string;
    route: string;
  }];
}
