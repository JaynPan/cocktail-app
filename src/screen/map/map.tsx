import React, { FC } from 'react';
import { View, Text, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import { styles, googlePlacesAutocompleteStyles } from './styles';

const { height, width } = Dimensions.get('window');
const LATITUDE = 23.6978; // Taiwan
const LONGITUDE = 120.9605;
const LATITUDE_DELTA = 5;
const LONGITUDE_DELTA = LATITUDE_DELTA * (width / height);

export const Map: FC = () => {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        isRowScrollable={false}
        styles={googlePlacesAutocompleteStyles}
        placeholder="Search"
        minLength={1}
        fetchDetails
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(details);
          // const placeId = data.place_id;
          // console.log(details?.geometry, details?.formatted_address, details?.name, details?.url);
        }}
        onFail={(error) => console.error(error)}
        query={{
          key: 'AIzaSyDAc6Gjizga1K8N0witdqpHKX3RAddK9n8',
          language: 'zh-TW',
        }}
        renderDescription={(data) => data.structured_formatting.main_text}
        debounce={300}
        renderRow={(rowData) => {
          const title = rowData.structured_formatting.main_text;
          const address = rowData.structured_formatting.secondary_text;

          return (
            <View>
              <Text numberOfLines={1} ellipsizeMode="tail">
                {title}
              </Text>
              <Text numberOfLines={1} ellipsizeMode="tail" style={styles.address}>
                {address}
              </Text>
            </View>
          );
        }}
      />
      <MapView
        initialRegion={{
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: 5,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        showsMyLocationButton
      />
    </View>
  );
};
