import { StyleSheet } from 'react-native';
import { authDescription, authTitle } from '../../styles/typography.ts';
import { PADDING_HORIZONTAL, SCREEN_WIDTH } from '../../styles/responsives.ts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: SCREEN_WIDTH * 0.2,
    width: SCREEN_WIDTH - PADDING_HORIZONTAL * 2,
  },
  image: {
    width: SCREEN_WIDTH * 0.7,
    height: SCREEN_WIDTH * 0.7,
    resizeMode: 'cover',
  },
  title: {
    ...authTitle,
    marginVertical: 8,
    textAlign: 'center',
  },
  description: {
    ...authDescription,
    textAlign: 'center',
  },
});

export default styles;
