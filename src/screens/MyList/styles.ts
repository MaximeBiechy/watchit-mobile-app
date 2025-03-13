import { StyleSheet } from 'react-native';
import { PADDING_VERTICAL, PADDING_VERTICAL_BUTTON } from '../../styles/responsives.ts';
import { bodyTextFont, FONT_SIZE_14 } from '../../styles/typography.ts';
import { darkGray } from '../../styles/colors.ts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListContainer: {
    flexDirection: 'column',
  },
  tabBar: {
    backgroundColor: 'transparent',
    elevation: 0,
    marginVertical: PADDING_VERTICAL_BUTTON,
  },
  tabBarContentContainer: {
    justifyContent: 'space-evenly',
  },
  tabText: {
    fontFamily: bodyTextFont,
    fontSize: FONT_SIZE_14,
    color: 'white',
  },
  tabStyle: {
    padding: PADDING_VERTICAL,
  },
  indicatorContainer: {},
  indicator: {
    backgroundColor: darkGray,
    height: 4,
  },
});

export default styles;
