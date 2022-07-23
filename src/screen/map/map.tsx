import React, { FC } from 'react';
import { View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import { styles } from './styles';

export const Map: FC = () => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} provider={PROVIDER_GOOGLE} showsUserLocation />
    </View>
  );
};
