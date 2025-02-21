import { StyleSheet } from 'react-native';
import { authSubtitle, authTitle } from '../../styles/typography.ts';
import { SCREEN_WIDTH } from '../../styles/responsives.ts';

const style = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: SCREEN_WIDTH * 0.1,
    gap: 15,
  },
  title: {
    ...authTitle,
    textAlign: 'center',
  },
  subtitle: {
    ...authSubtitle,
    textAlign: 'center',
  },
});

export default style;
