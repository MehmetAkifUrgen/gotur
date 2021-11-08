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
const Tab = createBottomTabNavigator();

const BottomTabNavigator = ({navigation}) => {
  const goDetail = () => {
    navigation.push('Summary');
  };
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          headerTintColor: 'black',
          headerTitleAlign: 'center',
          headerTitle: 'GÖTÜR',
          headerTitleStyle: {
            fontSize: 20,
          },
          headerStyle: {
            backgroundColor: 'white',
          },
          headerRight: ({color, size}) => (
            <TouchableOpacity style={styles.headerView} onPress={goDetail}>
              <Icon color={color} size={30} name="basket"></Icon>
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
  const navigationRef = useNavigationContainerRef();
  const goDetail = () => {
    if (navigationRef.isReady()) {
      navigationRef.navigate('Summary');
    } else {
      // You can decide what to do if react navigation is not ready
      // You can ignore this, or add these actions to a queue you can call later
    }
  };
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
      <TouchableOpacity style={styles.headerView} onPress={goDetail}>
        <Icon color={color} size={30} name="basket"></Icon>
      </TouchableOpacity>
    ),
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Home" component={BottomTabNavigator} />
        <Stack.Screen options={options} name="Detail" component={Detail} />
        <Stack.Screen name="Summary" component={Summary} />
        <Stack.Screen name="Done" component={Done} />
      </Stack.Navigator>
    </NavigationContainer>
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
