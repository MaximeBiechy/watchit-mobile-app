import { StyleSheet } from 'react-native';
import { PADDING_HORIZONTAL, PADDING_VERTICAL, SCREEN_WIDTH } from '../../styles/responsives.ts';
import { FONT_SIZE_12, FONT_SIZE_14, headingSectionFont } from '../../styles/typography.ts';
import { accentColor, darkGray } from '../../styles/colors.ts';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: PADDING_HORIZONTAL,
    height: SCREEN_WIDTH / 3,
    borderRadius: 10,
    backgroundColor: darkGray,
    padding: PADDING_HORIZONTAL,
  },
  poster: {
    height: '100%',
    aspectRatio: 0.7,
  },
  infosContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: PADDING_VERTICAL / 2,
  },
  title: {
    fontFamily: headingSectionFont,
    color: 'white',
    fontSize: FONT_SIZE_14,
    maxWidth: '70%',
  },
  voteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    gap: PADDING_VERTICAL / 2,
  },
  voteAverage: {
    color: accentColor,
    fontSize: FONT_SIZE_12,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: PADDING_VERTICAL,
  },
  textContent: {
    color: 'white',
    fontSize: FONT_SIZE_12,
  },
});

export default styles;
