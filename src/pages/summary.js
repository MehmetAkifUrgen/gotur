import React, {useEffect} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {plus, minus, done, delete_all, reduction} from '../redux/reducers';
import RenderItem from '../components/renderItem';
import IconButton from '../components/iconButton';

const Summary = ({navigation}) => {
  useEffect(() => {
    dispatch(reduction());
  }, []);

  function end_of_shopping() {
    dispatch(done());
    dispatch(delete_all());
  }

  const dispatch = useDispatch();

  const sums = useSelector(state => state.sepet.sum);
  function listFooterComponent() {
    return <Text style={styles.listFooterText}>Toplam :{sums} </Text>;
  }

  const sepet = useSelector(state => state.sepet.sepet);

  const renderItem = ({item, index}) => {
    return (
      <RenderItem
        image={item.image}
        ad={item.ad}
        product={item.product}
        fiyat={item.fiyat}
        adet={item.adet}
        minus={() => dispatch(minus())}
        plus={() => dispatch(plus())}
        disabled={false}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.contentContainer}
        data={sepet}
        keyExtractor={(_, index) => index}
        renderItem={renderItem}
        ListFooterComponent={listFooterComponent}
      />
      <View style={styles.button}>
        <IconButton
          onPress={end_of_shopping}
          name="basket-unfill"
          text={'Siparişi Tamamla'}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },

  contentContainer: {
    marginHorizontal: 10,
  },
  listFooterText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Summary;
