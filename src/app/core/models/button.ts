import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface IButton {
  backgroundColor: string;
  color: string;
  text: string;
  icon?: IconProp;
  height?: string;
  width?: string;
  fontWeight?: number;
}
