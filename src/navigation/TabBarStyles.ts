import { StyleSheet } from 'react-native';
import { highlightColor, primaryColor } from '../styles/colors.ts';

const tabBarStyles = StyleSheet.create({
  default: {
    backgroundColor: primaryColor,
    borderColor: highlightColor,
    borderTopWidth: 1,
    height: 80,
    paddingTop: 10,
  },
});

export default tabBarStyles;
