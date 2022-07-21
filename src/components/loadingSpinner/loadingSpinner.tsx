import React, { FC } from 'react';
import { View, ActivityIndicator } from 'react-native';

import { LoadingSpinnerProps } from './types';

export const LoadingSpinner: FC<LoadingSpinnerProps> = ({ size = 'large', withBackgroundColor = true }) => {
  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999,
      }}
    >
      <ActivityIndicator
        size={size}
        color="#999999"
        style={{
          padding: 20,
          borderRadius: 10,
          backgroundColor: withBackgroundColor ? '#fff' : '',
          ...(withBackgroundColor
            ? {
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,

                elevation: 3,
              }
            : {}),
        }}
      />
    </View>
  );
};
