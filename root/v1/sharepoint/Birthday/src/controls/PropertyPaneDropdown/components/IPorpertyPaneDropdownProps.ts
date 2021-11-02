import { IDropdownOption } from 'office-ui-fabric-react/lib/components/Dropdown';

export interface IPropertyPaneDropdownProps {
  label: string;
  loadOptions: () => Promise<IDropdownOption[]>;
  onPropertyChange: (propertyPath: string, newValue: any) => void;
  selectedKey: string | number;
  disabled?: boolean;
}