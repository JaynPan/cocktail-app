import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import { Styles } from 'react-native-google-places-autocomplete';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 88,
  },
  address: {
    color: '#777',
  },
});

const textInputOffset = Constants.statusBarHeight + 10;

export const googlePlacesAutocompleteStyles: Partial<Styles> = {
  container: {
    position: 'absolute',
    top: textInputOffset,
    left: 32,
    right: 32,
    height: 40,
    zIndex: 999,
  },
  textInput: {
    borderColor: '#eee',
    borderWidth: 1,
  },
  listView: {
    backgroundColor: '#fff',
    borderColor: '#eee',
    borderWidth: 1,
    borderRadius: 2,
    position: 'absolute',
    top: textInputOffset,
  },
  poweredContainer: {
    display: 'none',
  },
};
