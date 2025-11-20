import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './tabs/Home';

import Search from './tabs/Search';

const Bottom = createBottomTabNavigator();

const BottomRabNavigator = () => {
  return (
    <Bottom.Navigator>
      <Bottom.Screen name="Home" component={Home} />
      <Bottom.Screen name="Search" component={Search} />
    </Bottom.Navigator>
  );
};

export default BottomRabNavigator;
