import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Main from '../pages/main';
import Done from '../pages/done';
import Summary from '../pages/summary';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Detail from '../pages/detail';
import {Provider} from 'react-redux';
import initialState from '../redux/store';
const Tab = createBottomTabNavigator();

const BottomTabNavigator = ({navigation}) => {
  const goDetail = () => {
    navigation.navigate('AnaSayfa', {screen: 'Sepet'});
  };
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitle: 'Götür',
          headerTitleStyle: {
            fontSize: 20,
          },
          headerStyle: {
            backgroundColor: '#3DDBB4',
          },
          headerRight: () => (
            <TouchableOpacity style={styles.headerView} onPress={goDetail}>
              <Icon color={'orange'} size={30} name="basket"></Icon>
            </TouchableOpacity>
          ),
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Summary"
        component={Summary}
        options={{
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitle: 'Sepetim',
          headerTitleStyle: {
            fontSize: 20,
          },
          headerStyle: {
            backgroundColor: '#3DDBB4',
          },
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="basket" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Done"
        component={Done}
        options={{
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitle: 'Siparişler',
          headerTitleStyle: {
            fontSize: 20,
          },
          headerStyle: {
            backgroundColor: '#3DDBB4',
          },
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="check-all"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};

const HomeStackNavigator = ({navigation}) => {
  return (
    <Provider store={initialState}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptionStyle}>
          <Stack.Screen name="AnaSayfa" component={BottomTabNavigator} />
          <Stack.Screen name="Detaylar" component={Detail} />
          <Stack.Screen name="Sepet" component={Summary} />
          <Stack.Screen name="Siparisler" component={Done} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
const styles = StyleSheet.create({
  headerView: {
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeStackNavigator;
