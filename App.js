/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer, createNavigator} from 'react-navigation';
import {createStackNavigator, } from 'react-navigation-stack';

import items from './items';  
import additem from './additem';




const AppNavigator = createNavigator({
  Home: {
    screen: items
  },
  Add: {
    screen: additem
  }


   
}, {initialRouteName: "Home"});

const AppContainer = createAppContainer(AppNavigator);



export default AppContainer;