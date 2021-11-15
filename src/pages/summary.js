import React, {useEffect, useState} from 'react';
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
import {plus, minus, done, delete_all, reduction} from '../redux/reducers';
import ListHeaderComponent from '../components/listHeaderComponent';

const Summary = ({navigation}) => {
  const [toplam, setToplam] = useState(0);
  useEffect(() => {
    dispatch(reduction());
  }, []);

  function end_of_shopping() {
    dispatch(done());
    dispatch(delete_all());
  }

  const dispatch = useDispatch();

  const sums = useSelector(state => state.sepet.sum);
  console.log(sums);
  function listFooterComponent() {
    return <Text>Toplam :{sums} </Text>;
  }
  function ItemSeparatorComponent() {
    return <View style={styles.ItemSeparatorComponent}></View>;
  }

  const sepet = useSelector(state => state.sepet.sepet);

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.text}> {item.ad} </Text>
        <Text style={styles.text}> {item.adet} </Text>
        <Text style={styles.text}> {item.fiyat} </Text>
        <Number
          onPress1={() => dispatch(minus(index))}
          onPress2={() => dispatch(plus(index))}
        />
      </View>
    );
  };
  const listHeaderComponent = () => {
    return <ListHeaderComponent />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        ItemSeparatorComponent={ItemSeparatorComponent}
        ListHeaderComponent={listHeaderComponent}
        data={sepet}
        keyExtractor={(_, index) => index}
        renderItem={renderItem}
        ListFooterComponent={listFooterComponent}
      />
      <View style={styles.button}>
        <Icon.Button
          onPress={end_of_shopping}
          name="basket-unfill"
          backgroundColor="#8F7321">
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
  ItemSeparatorComponent: {
    height: 1,
    backgroundColor: 'black',
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
