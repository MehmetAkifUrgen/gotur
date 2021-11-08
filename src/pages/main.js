import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
  Text,
} from 'react-native';
import data from '../data/data.json';

const Main = ({navigation}) => {
  const renderItem = ({item}) => {
    const title = item.title;
    const img = item.imgURL;
    const price = item.price;
    const product = item.product;
    return (
      <TouchableOpacity
        onPress={() => navigation.push('Detail', {title, img, price, product})}
        style={styles.button}>
        <Image
          resizeMode={'stretch'}
          style={styles.image}
          source={{uri: item.imgURL}}
        />
        <Text style={styles.text}>{item.title}</Text>
        <Text style={styles.price}>Price : {parseInt(item.price / 9.5)}$</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        data={data}
        renderItem={renderItem}
        numColumns={2}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff1ff',
  },
  image: {
    width: Dimensions.get('screen').width / 2.5,
    height: Dimensions.get('screen').height / 4,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    color: 'black',
  },
  price: {
    color: 'grey',
    fontSize: 16,
  },
});

export default Main;
