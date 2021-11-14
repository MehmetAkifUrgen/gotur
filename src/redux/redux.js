import React from 'react';
import {Text, View, Button, SafeAreaView} from 'react-native';

export default () => {
  return (
    <Provider store={createStore(reducers, initialState)}>
      <SafeAreaView style={{flex: 1}}>
        <First />
        <Second />
      </SafeAreaView>
    </Provider>
  );
};
const First = () => {
  const counter = useSelector(selector => selector.counter);
  const dispatch = useDispatch();
  const handleUptade = () => {
    dispatch({type: 'update_counter'});
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fffccc'}}>
      <Text style={{fontSize: 30}}>First : {counter} </Text>
      <Button title="up" onPress={handleUptade} />
    </View>
  );
};
const Second = () => {
  const a = 'asdasd';

  console.log(counter);
  return (
    <View style={{flex: 1, backgroundColor: '#fffeee'}}>
      <Text style={{fontSize: 45}}> Second: {counter[0]} </Text>
      <Button title="Down" onPress={downUpdate} />
    </View>
  );
};
