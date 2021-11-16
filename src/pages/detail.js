import React, {useLayoutEffect, useState} from 'react';
import Number from '../components/number';
import {useDispatch} from 'react-redux';
import {incrementByAmount, reduction} from '../redux/reducers';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconButton from '../components/iconButton';

const Detail = ({route, navigation}) => {
  const dispatch = useDispatch();

  const [number, setNumber] = useState(1);

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
      Alert.alert('Ürün Sepete Eklendi');
    } else {
      Alert.alert('Adet sayısı en az 1 olmalıdır!');
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTintColor: 'white',
      headerTitleAlign: 'center',
      headerTitle: 'Detaylar',
      headerTitleStyle: {
        fontSize: 20,
      },
      headerStyle: {
        backgroundColor: '#3DDBB4',
      },
      headerRight: () => (
        <TouchableOpacity
          style={styles.headerView}
          onPress={() => navigation.navigate('AnaSayfa', {screen: 'Summary'})}>
          <Icon color={'orange'} size={30} name="basket"></Icon>
        </TouchableOpacity>
      ),
    });
    return () => {
      setNumber(1);
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
    height: Dimensions.get('window').height / 1.8,
    margin: 30,
  },
  main: {justifyContent: 'center', alignItems: 'center'},
  buton: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 22,
    color: 'black',
    textAlign: 'left',
  },
  price: {
    textAlign: 'left',
    fontSize: 20,
    color: 'green',
  },
  texts: {
    justifyContent: 'center',
    alignSelf: 'flex-start',
    marginLeft: Dimensions.get('window').width / 15,
  },
  product: {
    fontSize: 18,
    color: 'blue',
    textAlign: 'left',
  },
  headerView: {
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Detail;
