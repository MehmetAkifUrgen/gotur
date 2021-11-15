import React from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';

const listHeaderComponent = ({params}) => (
  <View style={styles.headTextContainer}>
    <Text style={styles.text}>Ürün Adı</Text>
    <Text style={styles.text}>Adet</Text>
    <Text style={styles.text}>Adet Fiyatı</Text>
    <Text style={styles.text}>+/-</Text>
  </View>
);
const styles = StyleSheet.create({
  headTextContainer: {
    flexDirection: 'row',

    alignItems: 'center',
    padding: 5,
    margin: 5,
  },
  text: {
    width: Dimensions.get('window').width / 4,
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default listHeaderComponent;
