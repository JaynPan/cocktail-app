import React, { FC, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';

import PrivateStack from '@/navigation/privateStack';
import PublicStack from '@/navigation/publicStack';
import { useWhoAmI } from '@/hook/auth';

export const Router: FC = () => {
  const {
    useWhoAmI: { isLoading },
    isAuthenticated,
  } = useWhoAmI();

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
  }, []);

  useEffect(() => {
    if (!isLoading) SplashScreen.hideAsync();
  }, [isLoading]);

  return <NavigationContainer>{isAuthenticated ? <PrivateStack /> : <PublicStack />}</NavigationContainer>;
};
