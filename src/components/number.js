import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Number = ({text, onPress1, onPress2, color}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress1}>
        <Icon color={'black'} name="minus" size={25} />
      </TouchableOpacity>
      <Text style={styles.text}>{text} </Text>
      <TouchableOpacity>
        <Icon color={'black'} onPress={onPress2} name="plus" size={25} />
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
  },
});
