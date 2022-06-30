import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Login } from '@/screen/login';
import { SignUp } from '@/screen/signup';

const Stack = createStackNavigator();

const PublicStack: FC = () => (
  <Stack.Navigator>
    <Stack.Screen name="Login" component={Login} options={{ title: '登入', headerShown: false }} />
  </Stack.Navigator>
);

export default PublicStack;
