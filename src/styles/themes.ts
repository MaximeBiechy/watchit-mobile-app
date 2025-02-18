import { DefaultTheme, Theme } from '@react-navigation/native';
import { primaryColor } from './colors.ts';

const darkTheme: Theme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    background: primaryColor,
    primary: 'white',
  },
};

export default darkTheme;
