import { StyleSheet } from 'react-native';
import { gray } from '../../styles/colors.ts';
import { FONT_SIZE_16, headingSectionFont } from '../../styles/typography.ts';
import { SCREEN_WIDTH } from '../../styles/responsives.ts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pagination: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: SCREEN_WIDTH * 0.05,
    justifyContent: 'space-around',
    width: '100%',
  },
  dotContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dot: {
    width: SCREEN_WIDTH * 0.015,
    height: SCREEN_WIDTH * 0.015,
    borderRadius: 4,
    marginHorizontal: SCREEN_WIDTH * 0.01,
  },
  skipText: {
    color: gray,
    fontSize: FONT_SIZE_16,
    fontFamily: headingSectionFont,
  },
  nextText: {
    color: 'white',
    fontSize: FONT_SIZE_16,
    fontFamily: headingSectionFont,
  },
});

export default styles;
