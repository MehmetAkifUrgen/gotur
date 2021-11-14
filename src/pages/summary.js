import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Number from '../components/number';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Summary = ({navigation}) => {
  const dispatch = useDispatch();

  const plus = index => {
    dispatch(index, {
      type: 'add',
    });
  };

  const counter = useSelector(selector => selector.arr);

  const renderItem = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.text}> {item.ad} </Text>
        <Text style={styles.text}> {item.adet} </Text>
        <Text style={styles.text}> {item.fiyat} </Text>
        <Number onPress2={plus(item.id)} />
      </View>
    );
  };
  const listHeaderComponent = () => {
    return (
      <View style={styles.headTextContainer}>
        <Text style={styles.text}>Ürün Adı</Text>
        <Text style={styles.text}>Adet</Text>
        <Text style={styles.text}>Adet Fiyatı</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={listHeaderComponent}
        data={counter}
        keyExtractor={(_, index) => index}
        renderItem={renderItem}
      />
      <View style={styles.button}>
        <Icon.Button name="basket-unfill" backgroundColor="#8F7321">
          Siparişi Tamamla
        </Icon.Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    padding: 5,
    margin: 5,
  },
  headTextContainer: {
    flexDirection: 'row',
    width: Dimensions.get('window').width * 0.75,
    alignItems: 'center',
    padding: 5,
    margin: 5,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    width: Dimensions.get('window').width / 4,
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
});

export default Summary;
