import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type PrivateStackParamList = {
  Home: undefined;
};

export type PrivateStackNavProps<T extends keyof PrivateStackParamList> = {
  navigation: StackNavigationProp<PrivateStackParamList, T>;
  route: RouteProp<PrivateStackParamList, T>;
};
