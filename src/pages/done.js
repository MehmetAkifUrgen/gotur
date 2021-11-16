import React from 'react';
import {Text, View, FlatList, StyleSheet, Dimensions} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import RenderItem from '../components/renderItem';
const Done = ({params}) => {
  const dones = useSelector(state => state.sepet.done);
  const sumAll = useSelector(state => state.sepet.sumAll);
  function ItemSeparatorComponent() {
    return <View style={styles.ItemSeparatorComponent}></View>;
  }

  function detail_items({item}) {
    return (
      <RenderItem
        image={item.image}
        ad={item.ad}
        product={item.product}
        fiyat={item.fiyat}
        adet={item.adet}
        disabled={true}
      />
    );
  }
  function renderItem({item, index}) {
    return (
      <View style={styles.listContainer}>
        <Text style={styles.text}>{index + 1}.Sipariş </Text>
        <Text style={styles.text}>
          Toplam: <Text style={styles.priceText}> {sumAll[index]} ₺ </Text>{' '}
        </Text>
        <FlatList
          ItemSeparatorComponent={ItemSeparatorComponent}
          data={item}
          keyExtractor={(_, index) => index}
          renderItem={detail_items}
        />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={dones}
        keyExtractor={(_, index) => index}
        renderItem={renderItem}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  listContainer: {
    paddingLeft: 5,
    borderWidth: 1,
    borderColor: 'black',
    margin: 20,
    borderRadius: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
    padding: 5,
    margin: 5,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 18,
    color: 'black',
    textAlign: 'left',
  },
  ItemSeparatorComponent: {
    height: 0.5,
    backgroundColor: 'black',
  },
  priceText: {
    fontSize: 20,
    color: 'green',
    textAlign: 'left',
    fontWeight: 'bold',
  },
});

export default Done;
