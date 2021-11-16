import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const IconButton = ({onPress, name, text}) => (
  <Icon.Button onPress={onPress} name={name} backgroundColor="#02E35C">
    {text}
  </Icon.Button>
);

export default IconButton;
