import { Button, Container } from 'native-base';
import React, { FC } from 'react';
import * as SecureStore from 'expo-secure-store';
import { Text } from 'react-native';
import { useQueryClient } from 'react-query';
import { useWhoAmI } from '@/hook/auth';

export const Home: FC = () => {
  const queryClient = useQueryClient();

  const {
    useWhoAmI: { data: userInfo },
  } = useWhoAmI();

  const handleLogout = () => {
    SecureStore.deleteItemAsync('accessToken');
    queryClient.setQueriesData('user', undefined);
  };

  return (
    <Container flex="1" justifyContent="center" alignItems="center">
      <Text>{userInfo?.email}</Text>
      <Button colorScheme="primary" width="50%" onPress={handleLogout}>
        登出
      </Button>
    </Container>
  );
};
