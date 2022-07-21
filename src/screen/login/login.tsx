import React, { FC } from 'react';
import { Stack } from 'native-base';
import * as AppleAuthentication from 'expo-apple-authentication';

import { useLoginApple, useSignUpApple } from '@/hook/auth';

export const Login: FC = () => {
  const { mutate: appleSignUpMutate } = useSignUpApple();
  const { mutate: appleLoginMutate } = useLoginApple();

  const pressAppleSignButton = async () => {
    try {
      const { identityToken, fullName, email } = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });

      if (!identityToken) return;

      // The email and fullName will only be populated ONCE.
      // The first time they press the button, this applies even if they change their device or update the app.
      const isUserInfoShown = !!fullName?.givenName && !!email;

      if (!isUserInfoShown) {
        appleLoginMutate({ identityToken });
      } else {
        appleSignUpMutate({
          name: fullName?.givenName || '',
          identityToken,
        });
      }
    } catch (err: any) {
      if (err.code === 'ERR_CANCELED') {
        // handle that the user canceled the sign-in flow
      } else {
        // handle other errors
      }
    }
  };

  return (
    <Stack space={4} w="100%" alignItems="center" justifyContent="center" flex="1" paddingX="8">
      <AppleAuthentication.AppleAuthenticationButton
        buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
        buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
        cornerRadius={5}
        style={{ width: '100%', height: 50 }}
        onPress={pressAppleSignButton}
      />
    </Stack>
  );
};
