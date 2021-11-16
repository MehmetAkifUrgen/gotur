import React, {useLayoutEffect, useState, useEffect} from 'react';
import Number from '../components/number';
import {useSelector, useDispatch} from 'react-redux';
import {incrementByAmount, reduction, sum} from '../redux/reducers';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconButton from '../components/iconButton';

const Detail = ({route, navigation}) => {
  const dispatch = useDispatch();

  const selector = useSelector(state => state.sepet.sepet);

  const [number, setNumber] = useState(0);

  const {title, price, img, product} = route.params;
  const insert = () => {
    if (number != 0) {
      dispatch(
        incrementByAmount({
          ad: title,
          adet: number,
          fiyat: price,
          image: img,
          product: product,
        }),
      );
      dispatch(reduction());
    } else {
      Alert.alert('Adet sayısı en az 1 olmalıdır!');
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={styles.headerView}
          onPress={() => navigation.navigate('Home', {screen: 'Summary'})}>
          <Icon size={30} name="basket"></Icon>
        </TouchableOpacity>
      ),
    });
    return () => {
      setNumber(0);
    };
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
          plus={() => setNumber(number + 1)}
          minus={() => (number == 0 ? null : setNumber(number - 1))}
          text={number}
        />
        <IconButton onPress={insert} name="basket" text={'Sepete Ekle'} />
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
