import { StyleSheet } from 'react-native';
import { darkGray } from '../../styles/colors.ts';
import { PADDING_VERTICAL_BUTTON } from '../../styles/responsives.ts';
import { bodyTextBold } from '../../styles/typography.ts';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: darkGray,
    borderRadius: 24,
    paddingHorizontal: PADDING_VERTICAL_BUTTON * 2,
    paddingVertical: PADDING_VERTICAL_BUTTON,
  },
  icon: {
    marginRight: PADDING_VERTICAL_BUTTON,
  },
  input: {
    flex: 1,
    ...bodyTextBold,
    color: 'white',
  },
});
export default styles;
