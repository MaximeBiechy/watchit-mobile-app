import { StyleSheet } from 'react-native';
import { authTitle, bodyInfoFont, headingSectionFont, headingTitleFont } from '../../styles/typography.ts';
import { darkGray, gray, highlightColor } from '../../styles/colors.ts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 100,
  },
  title: {
    ...authTitle,
    color: 'white',
    marginVertical: 8,
  },
  subtitle: {
    fontFamily: bodyInfoFont,
    fontSize: 14,
    color: gray,
    textAlign: 'center',
  },
  emailText: {
    color: 'white',
  },
  otpContainer: {
    marginVertical: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    gap: 16,
  },
  otpInput: {
    width: 64,
    height: 64,
    borderWidth: 1,
    borderRadius: 12,
    color: 'white',
    fontFamily: headingSectionFont,
    textAlign: 'center',
    backgroundColor: darkGray,
    fontSize: 28,
    lineHeight: 28,
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
