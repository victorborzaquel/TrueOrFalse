import { Entypo } from '@expo/vector-icons'; 
import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import { Operators, Type } from '../../screens/Home';

export function UISelectDropdown({data, onSelect, defaultValue, width=130}: {
  data: Type[] | Operators[];
  defaultValue: Type | Operators;
  onSelect(selectedItem: Type | Operators, index: number): void;
  width?: number | string;
}) {
  return (
    <SelectDropdown
      data={data}
      dropdownIconPosition="right"
      defaultValue={defaultValue}
      renderDropdownIcon={() => <Entypo name="chevron-down" size={24} color="#797979" />}
      rowStyle={{ backgroundColor: "#eee" }}
      dropdownStyle={{ borderRadius: 10 }}
      buttonStyle={{ borderRadius: 10, borderWidth: 1, borderColor: "#adadad", width }}
      onSelect={onSelect}
      buttonTextAfterSelection={(selectedItem, index) => selectedItem}
      rowTextForSelection={(item, index) => item}
    />
  );
}
