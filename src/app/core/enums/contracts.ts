import { IDropdown } from "../models/dropdown";

export const StatusContractor: { [key: string]: string } = {
  'SC-01': 'Active',
  'SC-02': 'Signature pending',
  'SC-03': 'Documents pending',
};

export const TypeContractorList: IDropdown[] = [
  {
    value: 'CT-01',
    name: 'Traditional',
  },
  {
    value: 'CT-02',
    name: 'Cost plus',
  },
  {
    value: 'CT-03',
    name: 'Time and materials',
  },
  {
    value: 'CT-04',
    name: 'Temporary',
  }
];



export const StatusContractorList: IDropdown[] = [
  {
    value: 'SC-01',
    name: 'Active',
  },
  {
    value: 'SC-01',
    name: 'Signature pending',
  },
  {
    value: 'SC-03',
    name: 'Documents pending',
  },
];
