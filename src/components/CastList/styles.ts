import { StyleSheet } from 'react-native';
import { bodyTextBold } from '../../styles/typography.ts';
import { PADDING_HORIZONTAL } from '../../styles/responsives.ts';

const styles = StyleSheet.create({
  cast: {
    alignItems: 'center',
    gap: PADDING_HORIZONTAL / 2,
    marginHorizontal: PADDING_HORIZONTAL / 2,
  },
  castImage: {
    height: 'auto',
    aspectRatio: 1,
    borderRadius: 1000, // ? big number to make it a circle
  },
  castName: {
    ...bodyTextBold,
    color: 'white',
    textAlign: 'center',
  },
});

export default styles;
