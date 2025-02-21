import { StyleSheet } from 'react-native';
import { FONT_SIZE_14, headingSectionFont } from '../../styles/typography.ts';
import { highlightColor } from '../../styles/colors.ts';
import { PADDING_VERTICAL_BUTTON } from '../../styles/responsives.ts';

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: highlightColor,
    paddingVertical: PADDING_VERTICAL_BUTTON,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  buttonTitle: {
    fontFamily: headingSectionFont,
    fontSize: FONT_SIZE_14,
    color: 'white',
  },
});

export default styles;
