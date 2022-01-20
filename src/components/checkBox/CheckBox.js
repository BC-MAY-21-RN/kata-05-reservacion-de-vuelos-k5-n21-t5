import React from 'react';

import CheckBoxComponent from '@react-native-community/checkbox';

export function CheckBox({ value, setState, textComponent }) {
  return (
    <>
      <CheckBoxComponent
        value={value}
        tintColors={{ true: '#5B5CDD', false: 'gray' }}
        onValueChange={setState}
      />
      {textComponent}
    </>
  );
}
