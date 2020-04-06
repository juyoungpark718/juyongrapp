import React from 'react';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import HomeRoute from '../routes/HomeRoute';
import SearchRoute from '../routes/SearchRoute';
import NotificationsRoute from '../routes/NotificationsRoute';
import ProfileRoute from '../routes/ProfileRoute';
import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';

const TabsNavigation = createBottomTabNavigator(
  {
    Home: {
      screen: HomeRoute,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name={focused ? 'ios-home' : 'ios-home-outline'}
            size={30}
            color={'black'}
          />
        ),
      },
    },
    Search: {
      screen: SearchRoute,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name={focused ? 'ios-search' : 'ios-search-outline'}
            size={30}
            color={'black'}
          />
        ),
      },
    },
    AddPhoto: {
      screen: View,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Ionicons name={'ios-add-circle-outline'} size={30} color={'black'} />
        ),
      },
    },
    Notifications: {
      screen: NotificationsRoute,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name={focused ? 'ios-heart' : 'ios-heart-outline'}
            size={30}
            color={'black'}
          />
        ),
      },
    },
    Profile: {
      screen: ProfileRoute,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name={focused ? 'ios-person' : 'ios-person-outline'}
            size={30}
            color={'black'}
          />
        ),
      },
    },
  },
  {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: '#FBFBFB',
        height: 45,
      },
    },
    navigationOptions: {
      tabBarOnPress: ({ navigation }) => {
        if (!navigation.isFocused()) {
          if (navigation.state.key === 'AddPhoto') {
            navigation.navigate('TakePhoto');
          } else {
            navigation.navigate(navigation.state.key);
          }
        }
      },
    },
  }
);

export default TabsNavigation;
