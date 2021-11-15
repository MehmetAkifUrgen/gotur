import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import Main from '../pages/main';
import Done from '../pages/done';
import Summary from '../pages/summary';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import Detail from '../pages/detail';
import {createStore} from 'redux';
import {Provider, useSelector, useDispatch} from 'react-redux';
import reducers from '../redux/reducers';
import initialState from '../redux/store';
const Tab = createBottomTabNavigator();

const BottomTabNavigator = ({navigation}) => {
  const goDetail = () => {
    navigation.navigate('Home', {screen: 'Summary'});
  };
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveBackgroundColor: '#1A8F72',
        tabBarActiveBackgroundColor: '#CE53DB',
      }}>
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
          headerRight: ({color, size}) => (
            <TouchableOpacity style={styles.headerView} onPress={goDetail}>
              <Icon color={'white'} size={30} name="basket"></Icon>
            </TouchableOpacity>
          ),
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={'white'} size={size} />
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
            <MaterialCommunityIcons name="basket" color={'white'} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Done"
        component={Done}
        options={{
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitle: 'Tamamlanan Siparişler',
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
              color={'white'}
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
  const options = {
    headerShown: true,
    headerTintColor: 'black',
    headerTitleAlign: 'center',
    headerTitle: 'Detail',
    headerTitleStyle: {
      fontSize: 20,
    },
    headerStyle: {
      backgroundColor: 'white',
    },
    headerRight: ({color, size}) => (
      <TouchableOpacity
        style={styles.headerView}
        onPress={() => navigation.navigate('Summary')}>
        <Icon color={color} size={30} name="basket"></Icon>
      </TouchableOpacity>
    ),
  };

  return (
    <Provider store={initialState}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptionStyle}>
          <Stack.Screen name="Home" component={BottomTabNavigator} />
          <Stack.Screen options={options} name="Detail" component={Detail} />
          <Stack.Screen name="Summary" component={Summary} />
          <Stack.Screen name="Done" component={Done} />
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
