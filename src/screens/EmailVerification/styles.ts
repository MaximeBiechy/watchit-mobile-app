import { StyleSheet } from 'react-native';
import { authTitle, bodyInfoFont, headingTitleFont } from '../../styles/typography.ts';
import { gray, highlightColor } from '../../styles/colors.ts';

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
