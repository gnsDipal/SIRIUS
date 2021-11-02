import { IDropdownOption } from 'office-ui-fabric-react/lib/components/Dropdown';

export interface IDropdownState {
  loading: boolean;
  options: IDropdownOption[];
  error: string;
}