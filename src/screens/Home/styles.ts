import { StyleSheet } from 'react-native';
import { bodyTextFont, FONT_SIZE_14, headingTitleFont, sectionTitle } from '../../styles/typography.ts';
import { darkGray, highlightColor } from '../../styles/colors.ts';
import { PADDING_HORIZONTAL, PADDING_VERTICAL, PADDING_VERTICAL_BUTTON, SCREEN_WIDTH } from '../../styles/responsives.ts';

const imageSize = SCREEN_WIDTH / 3 - PADDING_HORIZONTAL - 4; // ? 3 images per row

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
    flexShrink: 1,
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
    gap: PADDING_HORIZONTAL,
    marginVertical: PADDING_VERTICAL_BUTTON,
  },
  cardGrid: {
    width: imageSize,
    aspectRatio: 0.7,
    objectFit: 'cover',
    borderRadius: 16,
  },
  tabBar: {
    backgroundColor: 'transparent',
    elevation: 0,
    marginVertical: PADDING_VERTICAL_BUTTON,
  },
  tabBarContentContainer: {
    justifyContent: 'space-between',
  },
  tabText: {
    fontFamily: bodyTextFont,
    fontSize: FONT_SIZE_14,
    color: 'white',
  },
  tabStyle: {
    padding: PADDING_VERTICAL,
  },
  indicator: {
    backgroundColor: darkGray,
    height: 4,
  },
});

export default styles;
