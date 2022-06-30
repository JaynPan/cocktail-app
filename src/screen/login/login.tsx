import React, { FC, useState } from 'react';
import { Text } from 'react-native';
import { Stack, Center, Input, Icon, Button } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { useLogin } from '@/hook/auth';

export const Login: FC = () => {
  const [show, setShow] = React.useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { mutate } = useLogin();

  const handleLogin = () => {
    mutate({ email, password });
  };

  return (
    <Stack space={4} w="100%" alignItems="center" justifyContent="center" flex="1">
      <Input
        w={{
          base: '75%',
          md: '25%',
        }}
        InputLeftElement={<Icon as={<MaterialIcons name="email" />} size={5} ml="2" color="muted.400" />}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        w={{
          base: '75%',
          md: '25%',
        }}
        type={show ? 'text' : 'password'}
        onChangeText={(text) => setPassword(text)}
        InputLeftElement={<Icon as={<MaterialIcons name="lock" />} size={5} ml="2" color="muted.400" />}
        InputRightElement={
          <Icon
            as={<MaterialIcons name={show ? 'visibility' : 'visibility-off'} />}
            size={5}
            mr="2"
            color="muted.400"
            onPress={() => setShow(!show)}
          />
        }
        placeholder="Password"
      />
      <Button width="75%" colorScheme="primary" onPress={handleLogin}>
        送出
      </Button>
    </Stack>
  );
};
