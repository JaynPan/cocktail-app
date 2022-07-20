import React, { FC, useState } from 'react';
import { Stack, Center, Input, Icon, Button } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import * as AppleAuthentication from 'expo-apple-authentication';

import { useAppleLogin, useAppleSignUp, useLogin } from '@/hook/auth';
import { HandleAppleSignUpArgs } from './types';

export const Login: FC = () => {
  const [show, setShow] = React.useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { mutate: emailPasswordLoginMutate } = useLogin();
  const { mutate: appleSignUpMutate } = useAppleSignUp();
  const { mutate: appleLoginMutate } = useAppleLogin();

  const handleLogin = () => {
    emailPasswordLoginMutate({ email, password });
  };

  const handleAppleSignUp = async (payload: HandleAppleSignUpArgs) => {
    appleSignUpMutate(payload);
  };

  const handleAppleLogin = async (identityToken: string) => {
    appleLoginMutate({ identityToken });
  };

  const pressAppleSignButton = async () => {
    try {
      const { identityToken, fullName, email } = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });

      if (!identityToken) return;

      // const cachedName: string = await Cache.getAppleLoginName(credential.user);

      // The email and fullName will only be populated ONCE. The first time they press the button, this applies even if they change their device or update the app.
      const isUserInfoShown = !!fullName?.givenName && !!email;

      if (!isUserInfoShown) {
        await handleAppleLogin(identityToken);
        return;
      }

      await handleAppleSignUp({
        name: fullName?.givenName || '',
        email: email || '',
        identityToken,
      });
    } catch (err: any) {
      if (err.code === 'ERR_CANCELED') {
        // handle that the user canceled the sign-in flow
      } else {
        // handle other errors
      }
    }
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
      <AppleAuthentication.AppleAuthenticationButton
        buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
        buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
        cornerRadius={5}
        style={{ width: 200, height: 44 }}
        onPress={pressAppleSignButton}
      />
    </Stack>
  );
};
