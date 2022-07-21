import React, { FC } from 'react';
import { StatusBar } from 'expo-status-bar';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NativeBaseProvider } from 'native-base';

import { Router } from '@/router';
import '@/config/axios';

const queryClient = new QueryClient({});

const App: FC = () => {
  return (
    <NativeBaseProvider>
      <QueryClientProvider client={queryClient}>
        <StatusBar style="auto" />
        <Router />
      </QueryClientProvider>
    </NativeBaseProvider>
  );
};

export default App;
