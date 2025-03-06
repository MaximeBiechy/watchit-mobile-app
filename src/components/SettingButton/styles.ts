import { StyleSheet } from 'react-native';
import { darkGray, highlightColor } from '../../styles/colors.ts';
import { PADDING_VERTICAL } from '../../styles/responsives.ts';
import { bodyLongTextFont, FONT_SIZE_12 } from '../../styles/typography.ts';

const styles = StyleSheet.create({
  settingButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: darkGray,
    paddingHorizontal: PADDING_VERTICAL * 2,
    paddingVertical: PADDING_VERTICAL,
  },
  leftSide: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: PADDING_VERTICAL * 2,
  },
  rightSide: {},
  rightText: {
    color: highlightColor,
    fontFamily: bodyLongTextFont,
    fontSize: FONT_SIZE_12,
  },
  title: {
    color: 'white',
    fontFamily: bodyLongTextFont,
    fontSize: FONT_SIZE_12,
  },
});

export default styles;
