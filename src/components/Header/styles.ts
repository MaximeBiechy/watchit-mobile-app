import { StyleSheet } from 'react-native';
import { navigationTopBarTitle } from '../../styles/typography.ts';
import { PADDING_HORIZONTAL, PADDING_VERTICAL, SCREEN_WIDTH } from '../../styles/responsives.ts';

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: PADDING_HORIZONTAL / 2,
    paddingTop: PADDING_VERTICAL * 2,
    paddingBottom: PADDING_VERTICAL * 2,
  },
  leftSide: {
    width: SCREEN_WIDTH * 0.08,
    paddingLeft: PADDING_HORIZONTAL / 3,
  },
  title: {
    ...navigationTopBarTitle,
    color: 'white',
    maxWidth: '70%',
    textAlign: 'center',
  },
  rightSide: {
    width: SCREEN_WIDTH * 0.08,
    paddingRight: PADDING_HORIZONTAL / 3,
  },
});

export default styles;
