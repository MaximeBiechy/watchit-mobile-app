import { StyleSheet } from 'react-native';
import { darkGray } from '../../styles/colors.ts';
import { bodyTextFont, FONT_SIZE_12 } from '../../styles/typography.ts';
import { PADDING_VERTICAL_BUTTON } from '../../styles/responsives.ts';

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: darkGray,
    borderRadius: 8,
    paddingHorizontal: PADDING_VERTICAL_BUTTON * 2,
    paddingVertical: PADDING_VERTICAL_BUTTON,
  },
  input: {
    flex: 1,
    color: 'white',
    fontFamily: bodyTextFont,
    fontSize: FONT_SIZE_12,
  },
});

export default styles;
