import React, {useLayoutEffect, useState} from 'react';
import Number from '../components/number';
import {useSelector, useDispatch} from 'react-redux';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  Button,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Detail = ({route, navigation}) => {
  const dispatch = useDispatch();

  const counter = useSelector(selector => selector.arr);

  const [number, setNumber] = useState(0);
  const {title, price, img, product} = route.params;
  const insert = value => {
    dispatch({
      type: 'down_counter',
      newItem: {ad: title, adet: number, fiyat: price, id: 0},
    });
  };
  console.log(counter);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={styles.headerView}
          onPress={() => navigation.push('Summary')}>
          <Icon size={30} name="basket"></Icon>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

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
        <Text style={styles.price}> {price}₺ </Text>
        <Number
          onPress2={() => setNumber(number + 1)}
          onPress1={() => (number == 0 ? null : setNumber(number - 1))}
          text={number}
        />
        <Icon.Button
          onPress={insert}
          name="basket"
          backgroundColor="#8F7321"
          solid>
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
