import { StyleSheet } from 'react-native';
import { PADDING_HORIZONTAL, PADDING_VERTICAL, PADDING_VERTICAL_BUTTON, SCREEN_WIDTH } from '../../styles/responsives.ts';
import { accentColor, darkBlue, darkGray, gray, highlightColor } from '../../styles/colors.ts';
import {
  bodyInfo,
  bodyInfoFont,
  bodyText,
  FONT_SIZE_12,
  FONT_SIZE_14,
  FONT_SIZE_22,
  headingTitleFont,
  sectionTitle,
} from '../../styles/typography.ts';

const HEADER_HEIGHT = PADDING_VERTICAL * 4 + FONT_SIZE_22;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: -HEADER_HEIGHT,
    left: 0,
    right: 0,
    bottom: 0,
    width: SCREEN_WIDTH,
  },
  mainInfos: {
    padding: PADDING_HORIZONTAL,
    alignItems: 'center',
    gap: PADDING_HORIZONTAL,
    marginTop: HEADER_HEIGHT,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  poster: {
    height: SCREEN_WIDTH / 1.3,
    marginTop: HEADER_HEIGHT,
    aspectRatio: 0.7,
    borderRadius: 14,
  },
  infosContainer: {
    flexDirection: 'row',
    gap: PADDING_HORIZONTAL,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: PADDING_HORIZONTAL / 2,
  },
  textInfo: {
    ...bodyInfo,
    color: gray,
  },
  directorContent: {
    ...bodyInfo,
    color: gray,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: PADDING_HORIZONTAL,
    alignItems: 'center',
  },
  trailerButton: {
    flexDirection: 'row',
    backgroundColor: accentColor,
    alignItems: 'center',
    gap: PADDING_HORIZONTAL / 2,
    padding: PADDING_HORIZONTAL,
    borderRadius: 32,
  },
  textButton: {
    fontFamily: bodyInfoFont,
    fontSize: FONT_SIZE_14,
    color: 'white',
  },
  seenButton: {
    backgroundColor: darkBlue,
    padding: PADDING_HORIZONTAL,
    borderRadius: PADDING_HORIZONTAL * 2,
  },
  secondPartContainer: {
    paddingHorizontal: PADDING_HORIZONTAL,
    paddingTop: PADDING_VERTICAL,
  },
  opinionContainer: {
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 1,
    paddingHorizontal: PADDING_HORIZONTAL,
    paddingVertical: PADDING_VERTICAL,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: PADDING_VERTICAL,
  },
  scoreContainer: {
    alignItems: 'center',
  },
  scoreAction: {
    backgroundColor: darkGray,
    paddingHorizontal: PADDING_VERTICAL,
    borderRadius: 10,
  },
  score: {
    fontFamily: headingTitleFont,
    fontSize: FONT_SIZE_12,
    color: 'white',
  },
  who: {
    ...bodyInfo,
    color: gray,
  },
  descriptionContainer: {
    marginVertical: PADDING_VERTICAL,
  },
  descriptionText: {
    ...bodyText,
    color: 'white',
    textAlign: 'justify',
    lineHeight: FONT_SIZE_14,
  },
  sectionContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: PADDING_VERTICAL_BUTTON * 2,
  },
  functionText: {
    fontFamily: headingTitleFont,
    fontSize: FONT_SIZE_14,
    color: highlightColor,
  },
  streamingWatcherContainer: {
    marginVertical: PADDING_VERTICAL_BUTTON,
  },
  streamingProvider: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginHorizontal: PADDING_HORIZONTAL / 3,
  },
  commentsContainer: {},
  // ? Global Styles for the Details Screen
  divider: {
    width: 1,
    height: '50%',
    alignSelf: 'center',
    backgroundColor: gray,
    marginVertical: PADDING_HORIZONTAL / 2,
  },
  sectionTitle: {
    ...sectionTitle,
    color: 'white',
  },
});

export default styles;
