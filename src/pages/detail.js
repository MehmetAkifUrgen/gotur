import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const Detail = ({route, navigation}) => {
  const {title, price, img, product} = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Image resizeMode="stretch" style={styles.image} source={{uri: img}} />
        <View style={styles.texts}>
          <Text style={styles.product}> {product} </Text>
          <Text style={styles.title}> {title} </Text>
        </View>
      </View>
      <View style={styles.buton}>
        <Text style={styles.price}> {price}$ </Text>
        <Icon.Button name="basket" backgroundColor="orange" solid>
          Insert to Your Basket
        </Icon.Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  image: {
    width: Dimensions.get('window').width / 1.1,
    height: Dimensions.get('window').height / 1.7,
    margin: 30,
  },
  main: {justifyContent: 'center', alignItems: 'center'},
  buton: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    color: 'black',
  },
  price: {
    textAlign: 'left',
    fontSize: 20,
    color: 'green',
  },
  texts: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  product: {
    fontSize: 18,
    color: 'blue',
  },
});
export default Detail;
