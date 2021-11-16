import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Number from './number';

const RenderItem = ({
  image,
  ad,
  product,
  fiyat,
  adet,
  minus,
  plus,
  disabled,
}) => (
  <View style={styles.itemContainer}>
    <View style={styles.row}>
      <Image style={styles.siparisImage} source={{uri: image}} />
      <View style={styles.bodySiparis}>
        <Text style={styles.text}> {ad} </Text>
        <Text style={styles.text}>
          {' '}
          Satıcı: <Text style={styles.product}>{product}</Text>{' '}
        </Text>
        <View style={styles.bottomBody}>
          <Text style={styles.text}> {fiyat} ₺ </Text>

          {disabled == true ? (
            <Text>Adet : {adet}</Text>
          ) : (
            <Number text={adet} minus={minus} plus={plus} />
          )}
        </View>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor: 'white',
    shadowColor: 'black',
    elevation: 4,
    borderRadius: 10,
    margin: 2,
  },

  text: {
    fontSize: 17,
    color: 'black',
    textAlign: 'left',
  },

  siparisImage: {
    width: 100,
    height: 100,
    resizeMode: 'stretch',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  bodySiparis: {
    padding: 10,
    margin: 10,
    flex: 1,
  },
  bottomBody: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  product: {
    fontSize: 18,
    color: 'black',
    textAlign: 'left',
    color: 'orange',
    fontWeight: 'bold',
  },
});

export default RenderItem;
