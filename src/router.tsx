import React, { FC, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';

import PrivateStack from '@/navigation/privateStack';
import PublicStack from '@/navigation/publicStack';
import { useMe } from '@/hook/auth';
import { useUser } from '@/context/user.provider';

export const Router: FC = () => {
  const { isLoading } = useMe();
  const { isAuthenticated } = useUser();

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
  }, []);

  useEffect(() => {
    if (!isLoading) SplashScreen.hideAsync();
  }, [isLoading]);

  return <NavigationContainer>{isAuthenticated ? <PrivateStack /> : <PublicStack />}</NavigationContainer>;
};
