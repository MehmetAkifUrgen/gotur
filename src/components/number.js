import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Number = ({text, minus, plus}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={minus}>
        <Icon
          color={'black'}
          name={text == '1' ? 'delete' : 'minus'}
          size={25}
          color={'red'}
        />
      </TouchableOpacity>
      <Text style={styles.text}>{text} </Text>
      <TouchableOpacity>
        <Icon
          color={'black'}
          onPress={plus}
          name="plus"
          size={25}
          color={'green'}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Number;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    color: 'black',
  },
});
