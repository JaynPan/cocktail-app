import React, { FC } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { Home } from '@/screen/home';
import { Map } from '@/screen/map';

const Tab = createMaterialBottomTabNavigator();

export const MainTab: FC = () => {
  return (
    <Tab.Navigator activeColor="#f0edf6" shifting inactiveColor="#d1d1d1">
      <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: 'home', tabBarColor: '#000' }} />
      <Tab.Screen name="Map" component={Map} options={{ tabBarIcon: 'map', tabBarColor: '#5b3e28' }} />
    </Tab.Navigator>
  );
};
