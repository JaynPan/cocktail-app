import React, { FC, useEffect, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';

import PrivateStack from '@/navigation/privateStack';
import PublicStack from '@/navigation/publicStack';
import { useWhoAmI } from '@/hook/auth';

export const Router: FC = () => {
  const {
    useWhoAmI: { refetch },
    isAuthenticated,
  } = useWhoAmI();

  const displayScreenAfterFetchingUserRequest = useCallback(async () => {
    try {
      await SplashScreen.preventAutoHideAsync();
      await refetch();
    } finally {
      await SplashScreen.hideAsync();
    }
  }, []);

  useEffect(() => {
    displayScreenAfterFetchingUserRequest();
  }, []);

  return <NavigationContainer>{isAuthenticated ? <PrivateStack /> : <PublicStack />}</NavigationContainer>;
};
