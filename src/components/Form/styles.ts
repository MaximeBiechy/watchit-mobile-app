import { StyleSheet } from 'react-native';
import { bodyInfo } from '../../styles/typography.ts';
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
});

export default style;
