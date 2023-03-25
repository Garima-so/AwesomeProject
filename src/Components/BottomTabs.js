
import React from 'react';
import {View,Text,Image} from "react-native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Search from '../Screens/Search';
import Page from '../Screens/Page';
import Home from '../Screens/Home';

const Tab = createBottomTabNavigator();

const BottomTabs =()=> {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',tabBarStyle:{height:60,position:"absolute",bottom:1,borderRadius:90,marginHorizontal:25},
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused }) => (
          <Image source={require('../../Assets/icons/hombar.png')} style={{width:35,height:35,marginBottom: 1,tintColor:focused? "#000":"#333"}}/>
          ),
        }}
      />
       <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({focused }) => (
          <Image source={require('../../Assets/icons/searchbar.png')} style={{width:35,height:35,marginBottom: 1,tintColor:focused? "#000":"#333"}}/>
          ),
        }}
      />
       <Tab.Screen
        name="Page"
        component={Page}
        options={{
          tabBarLabel: 'Page',
          tabBarIcon: ({focused }) => (
          <Image source={require('../../Assets/icons/pagination.png')} style={{width:35,height:35,tintColor:focused? "#000":"#333"}}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default BottomTabs;