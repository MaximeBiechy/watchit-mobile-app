import { StyleSheet } from 'react-native';
import { authTitle, bodyInfoFont, headingTitleFont } from '../../styles/typography.ts';
import { gray, highlightColor } from '../../styles/colors.ts';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  appLogo: {
    width: 200,
  },
  appTitle: {
    ...authTitle,
    color: 'white',
    marginVertical: 8,
  },
  introText: {
    fontFamily: headingTitleFont,
    fontSize: 14,
    color: gray,
  },
  textContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  questionText: {
    fontSize: 16,
  },
  functionText: {
    fontFamily: headingTitleFont,
    fontSize: 16,
    color: highlightColor,
  },
  optionModeConnectionContainer: {
    marginVertical: 40,
    marginHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionModeConnectionText: {
    fontSize: 14,
    marginHorizontal: 10,
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
  // ? GENERIC STYLES FOR THIS SCREEN
  bodyText: {
    fontFamily: bodyInfoFont,
    color: gray,
  },
});

export default styles;
