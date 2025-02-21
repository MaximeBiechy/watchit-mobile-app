import { StyleSheet } from 'react-native';
import {
  authDescription,
  authTitle,
  bodyInfoFont,
  FONT_SIZE_26,
  FONT_SIZE_28,
  headingSectionFont,
  headingTitleFont,
} from '../../styles/typography.ts';
import { darkGray, gray, highlightColor } from '../../styles/colors.ts';
import { SCREEN_WIDTH } from '../../styles/responsives.ts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: SCREEN_WIDTH * 0.3,
  },
  title: {
    ...authTitle,
    textAlign: 'center',
    marginVertical: 8,
  },
  subtitle: {
    ...authDescription,
    textAlign: 'center',
  },
  emailText: {
    color: 'white',
  },
  otpContainer: {
    marginVertical: SCREEN_WIDTH * 0.1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    gap: SCREEN_WIDTH * 0.03,
  },
  otpInput: {
    width: SCREEN_WIDTH * 0.17,
    height: SCREEN_WIDTH * 0.17,
    borderWidth: 1,
    borderRadius: 12,
    color: 'white',
    fontFamily: headingSectionFont,
    textAlign: 'center',
    backgroundColor: darkGray,
    fontSize: FONT_SIZE_26,
    lineHeight: FONT_SIZE_26,
  },
  otpInputFocused: {
    borderColor: highlightColor,
    borderWidth: 1,
    borderRadius: 12,
  },
  textContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  questionText: {
    fontSize: 16,
    fontFamily: bodyInfoFont,
    color: gray,
  },
  functionText: {
    fontFamily: headingTitleFont,
    fontSize: 16,
    color: highlightColor,
  },
});

export default styles;
