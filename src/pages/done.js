import React from 'react';
import {Text, View, FlatList, StyleSheet, Dimensions} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import ListHeaderComponent from '../components/listHeaderComponent';
const Done = ({params}) => {
  const dones = useSelector(state => state.sepet.done);
  const sumAll = useSelector(state => state.sepet.sumAll);
  function ItemSeparatorComponent() {
    return <View style={styles.ItemSeparatorComponent}></View>;
  }
  function listFooterComponent() {
    return <Text>dasdsad</Text>;
  }

  function detail_items({item}) {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.text}> {item.ad} </Text>
        <Text style={styles.text}> {item.adet} </Text>
        <Text style={styles.text}> {item.fiyat} </Text>
      </View>
    );
  }
  function renderItem({item, index}) {
    return (
      <View style={styles.listContainer}>
        <Text>{index + 1}.Sipariş </Text>
        <Text>Toplam: {sumAll[index]} </Text>
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
    borderWidth: 3,
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
  },
  text: {
    width: Dimensions.get('window').width / 4,
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },
  ItemSeparatorComponent: {
    height: 1,
    backgroundColor: 'black',
  },
});

export default Done;
