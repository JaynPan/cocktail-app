import React, { FC } from 'react';
import { StatusBar } from 'expo-status-bar';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NativeBaseProvider } from 'native-base';

import { Router } from '@/router';
import UserProvider from '@/context/user.provider';
import '@/config/axios';

const queryClient = new QueryClient({});

const App: FC = () => {
  return (
    <NativeBaseProvider>
      <UserProvider>
        <QueryClientProvider client={queryClient}>
          <StatusBar style="auto" />
          <Router />
        </QueryClientProvider>
      </UserProvider>
    </NativeBaseProvider>
  );
};

export default App;
