import React, { FC, useEffect } from 'react';
import { Stack } from 'native-base';
import * as AppleAuthentication from 'expo-apple-authentication';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';

import { useLoginApple, useLoginGoogle, useSignUpApple } from '@/hook/auth';
import { GoogleLoginButton } from '@/components/googleLoinButton/googleLoginButton';
import { LoadingSpinner } from '@/components/loadingSpinner';

WebBrowser.maybeCompleteAuthSession();

export const Login: FC = () => {
  const { mutate: appleSignUpMutate, isLoading: appleSignUpProcessing } = useSignUpApple();
  const { mutate: appleLoginMutate, isLoading: appleLoginProcessing } = useLoginApple();
  const { mutate: googleLoginMutate, isLoading: googleLoginProcessing } = useLoginGoogle();

  const [, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '634100191621-gms7n9f0ag1u8m9hqjpo5nniamn0srrr.apps.googleusercontent.com',
  });

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

  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;

      if (authentication?.accessToken) {
        googleLoginMutate({ accessToken: authentication?.accessToken });
      }
    }
  }, [response]);

  return (
    <Stack space={4} w="100%" alignItems="center" justifyContent="center" flex="1" paddingX="8">
      {(appleSignUpProcessing || appleLoginProcessing || googleLoginProcessing) && <LoadingSpinner />}

      <AppleAuthentication.AppleAuthenticationButton
        buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
        buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
        cornerRadius={5}
        style={{ width: '100%', height: 48 }}
        onPress={pressAppleSignButton}
      />
      <GoogleLoginButton disabled={googleLoginProcessing} onPress={() => promptAsync()} />
    </Stack>
  );
};
