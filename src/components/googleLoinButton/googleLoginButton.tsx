import React, { FC } from 'react';
import { View, TouchableOpacity, Text, Image, ActivityIndicator, StyleSheet } from 'react-native';
import { GoogleLoinButtonProps } from './types';

export const GoogleLoginButton: FC<GoogleLoinButtonProps> = ({
  labelColor = '#0000008a',
  isLoading,
  disabled,
  backgroundColor = '#FFFFFF',
  children,
  ...rest
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        styles.container,
        {
          opacity: disabled ? 0.5 : 1,
          backgroundColor,
          width: '100%',
        },
      ]}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={labelColor} />
      ) : (
        <View style={{ width: '100%', alignItems: 'center' }}>
          <Image style={styles.logo} source={require('../../assets/google-logo.png')} />
          <Text style={[styles.label, { color: labelColor }]}>{children || 'Sign in with Google'}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  logo: {
    position: 'absolute',
    left: 20,
    width: 20,
    height: 20,
    marginRight: 24,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
  },
});
