import { StyleSheet } from 'react-native';
import { PADDING_VERTICAL, SCREEN_WIDTH } from '../../styles/responsives.ts';
import { bodyLongTextFont, FONT_SIZE_14, FONT_SIZE_16, headingTitleFont } from '../../styles/typography.ts';
import { darkGray } from "../../styles/colors.ts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  avatar: {
    width: SCREEN_WIDTH * 0.3,
    height: SCREEN_WIDTH * 0.3,
  },
  username: {
    fontSize: FONT_SIZE_16,
    fontFamily: headingTitleFont,
    textAlign: 'center',
    color: 'white',
  },
  email: {
    fontSize: FONT_SIZE_14,
    color: 'white',
    fontFamily: bodyLongTextFont,
    textAlign: 'center',
  },
  settingsContainer: {
    width: '100%',
    marginTop: PADDING_VERTICAL * 3,
  },
  settingFirstBlock: {},
  settingSecondBlock: {
    marginVertical: PADDING_VERTICAL * 3,
  },
  settingThirdBlock: {},
  // ? Global style for this component
  settingCommonStyle: {
    borderRadius: 8, // TODO: NOT WORKING
    boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)',
    paddingVertical: PADDING_VERTICAL,
    backgroundColor: darkGray,
  },
});

export default styles;
