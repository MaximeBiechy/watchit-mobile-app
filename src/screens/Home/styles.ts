import { StyleSheet } from 'react-native';
import { FONT_SIZE_14, headingTitleFont, sectionTitle } from '../../styles/typography.ts';
import { highlightColor } from '../../styles/colors.ts';
import { PADDING_HORIZONTAL, PADDING_VERTICAL_BUTTON, SCREEN_WIDTH } from '../../styles/responsives.ts';

const imageSize = SCREEN_WIDTH / 3 - PADDING_HORIZONTAL - 4; // ? 3 images per row

const styles = StyleSheet.create({
  sectionContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: PADDING_VERTICAL_BUTTON * 2,
  },
  sectionTitle: {
    ...sectionTitle,
    color: 'white',
  },
  functionText: {
    fontFamily: headingTitleFont,
    fontSize: FONT_SIZE_14,
    color: highlightColor,
  },
  cardContainer: {
    height: SCREEN_WIDTH / 2,
  },
  card: {
    height: SCREEN_WIDTH / 2,
    aspectRatio: 0.7,
    objectFit: 'cover',
    borderRadius: 14,
    marginRight: PADDING_VERTICAL_BUTTON * 2,
  },
  gridContainer: {
    marginVertical: 16,
    justifyContent: 'space-between',
  },
  cardGrid: {
    width: imageSize,
    objectFit: 'cover',
    borderRadius: 16,
  },
});

export default styles;
