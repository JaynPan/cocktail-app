import { TouchableOpacityProps } from 'react-native';

export type GoogleLoinButtonProps = {
  disabled?: boolean;
  isLoading?: boolean;
  labelColor?: string;
  backgroundColor?: string;
} & TouchableOpacityProps;
