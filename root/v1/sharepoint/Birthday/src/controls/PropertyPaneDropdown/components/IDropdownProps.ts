import { IDropdownOption } from 'office-ui-fabric-react/lib/components/Dropdown';

export interface IDropdownProps {
  label: string;
  loadOptions: () => Promise<IDropdownOption[]>;
  onChanged: (option: IDropdownOption, index?: number) => void;
  selectedKey: string | number;
  disabled: boolean;
  stateKey: string;
}