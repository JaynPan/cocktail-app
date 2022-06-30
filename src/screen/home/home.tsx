import { Button, Container } from 'native-base';
import React, { FC } from 'react';
import { Text } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { useUser } from '@/context/user.provider';

export const Home: FC = () => {
  const { setAuthenticated } = useUser();

  return (
    <Container flex="1" justifyContent="center" alignItems="center">
      <Button
        colorScheme="primary"
        width="50%"
        onPress={() => {
          SecureStore.deleteItemAsync('accessToken');
          setAuthenticated(false);
        }}
      >
        登出
      </Button>
    </Container>
  );
};
