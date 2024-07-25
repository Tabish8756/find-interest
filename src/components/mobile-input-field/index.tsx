import React from 'react';
import {TextInput, View} from 'react-native';
import {style} from './styles';

const MobileInputField = () => {
  return (
    <View>
      <TextInput
        placeholder="Enter Mobile Number"
        keyboardType="numeric"
        style={style.inputField}
      />
    </View>
  );
};

export default MobileInputField;
