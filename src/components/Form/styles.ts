import { StyleSheet } from 'react-native';
import { bodyInfo, bodyInfoFont, FONT_SIZE_10 } from '../../styles/typography.ts';
import { highlightColor } from '../../styles/colors.ts';

const style = StyleSheet.create({
  formContainer: {
    display: 'flex',
    gap: 20,
  },
  questionText: {
    ...bodyInfo,
    color: highlightColor,
    textAlign: 'right',
  },
  messageText: {
    color: highlightColor,
    textAlign: 'right',
    fontFamily: bodyInfoFont,
    fontSize: FONT_SIZE_10,
  },
});

export default style;
