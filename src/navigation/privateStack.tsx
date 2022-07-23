import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { MainTab } from '@/navigation/mainTab';

const Stack = createStackNavigator();

const PrivateStack: FC = () => (
  <Stack.Navigator>
    <Stack.Screen name="MainTab" component={MainTab} options={{ headerShown: false }} />
  </Stack.Navigator>
);

export default PrivateStack;
