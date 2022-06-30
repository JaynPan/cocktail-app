import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type PublicStackParamList = {
  Login: undefined;
};

export type PublicStackNavProps<T extends keyof PublicStackParamList> = {
  navigation: StackNavigationProp<PublicStackParamList, T>;
  route: RouteProp<PublicStackParamList, T>;
};
