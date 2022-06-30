import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '@/screen/home';

const Stack = createStackNavigator();

const PrivateStack: FC = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
  </Stack.Navigator>
);

export default PrivateStack;
