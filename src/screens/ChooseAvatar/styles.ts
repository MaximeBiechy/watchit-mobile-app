import { StyleSheet } from 'react-native';
import { authTitle } from '../../styles/typography.ts';
import { PADDING, SCREEN_WIDTH } from '../../styles/constants.ts';

const imageSize = SCREEN_WIDTH / 3 - PADDING.HORIZONTAL - 4; // ? 3 images per row

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    ...authTitle,
    textAlign: 'center',
  },
  gridContainer: {
    marginVertical: 16,
    justifyContent: 'space-between',
  },
  imageContainer: {
    alignItems: 'center',
    borderRadius: imageSize / 2,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  image: {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
    resizeMode: 'contain',
  },
});

export default styles;
