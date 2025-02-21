import { StyleSheet } from 'react-native';
import { bodyInfoFont, FONT_SIZE_14, FONT_SIZE_16, FONT_SIZE_28, headingTitleFont } from '../../styles/typography.ts';
import { gray, highlightColor } from '../../styles/colors.ts';
import { SCREEN_WIDTH } from '../../styles/responsives.ts';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  appLogo: {
    width: SCREEN_WIDTH * 0.5,
    height: (SCREEN_WIDTH * 0.5 * 9) / 16,
    aspectRatio: 16 / 9,
    resizeMode: 'cover',
  },
  appTitle: {
    fontFamily: headingTitleFont,
    fontSize: FONT_SIZE_28,
    color: 'white',
    marginVertical: 8,
  },
  introText: {
    fontFamily: headingTitleFont,
    fontSize: FONT_SIZE_14,
    color: gray,
  },
  textContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  questionText: {
    fontSize: FONT_SIZE_16,
  },
  functionText: {
    fontFamily: headingTitleFont,
    fontSize: FONT_SIZE_16,
    color: highlightColor,
  },
  optionModeConnectionContainer: {
    marginVertical: SCREEN_WIDTH * 0.1,
    marginHorizontal: SCREEN_WIDTH * 0.075,
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionModeConnectionText: {
    fontSize: FONT_SIZE_14,
    marginHorizontal: SCREEN_WIDTH * 0.075 * 0.33,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#252836',
  },
  OAuthContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  OAuth: {
    width: SCREEN_WIDTH * 0.15,
    height: SCREEN_WIDTH * 0.15,
  },
  // ? GENERIC STYLES FOR THIS SCREEN
  bodyText: {
    fontFamily: bodyInfoFont,
    color: gray,
  },
});

export default styles;
