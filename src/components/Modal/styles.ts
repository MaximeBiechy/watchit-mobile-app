import { StyleSheet } from 'react-native';
import { darkGray } from '../../styles/colors.ts';
import { PADDING_HORIZONTAL, SCREEN_WIDTH } from '../../styles/responsives.ts';
import { bodyTextFont, FONT_SIZE_12, FONT_SIZE_18, headingTitleFont } from '../../styles/typography.ts';

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: darkGray,
    paddingVertical: PADDING_HORIZONTAL * 2,
    paddingHorizontal: PADDING_HORIZONTAL,
    borderRadius: 32,
    maxWidth: SCREEN_WIDTH * 0.85,
    alignItems: 'center',
  },
  modalIcon: {
    width: SCREEN_WIDTH * 0.3,
    height: SCREEN_WIDTH * 0.3,
    marginBottom: PADDING_HORIZONTAL / 2,
  },
  modalTitle: {
    fontSize: FONT_SIZE_18,
    fontFamily: headingTitleFont,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: PADDING_HORIZONTAL,
  },
  modalMessage: {
    fontSize: FONT_SIZE_12,
    fontFamily: bodyTextFont,
    color: '#92929D',
    textAlign: 'center',
    marginBottom: PADDING_HORIZONTAL * 2,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    padding: PADDING_HORIZONTAL / 2,
    borderRadius: 32,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: PADDING_HORIZONTAL / 2,
  },
  buttonText: {
    textAlign: 'center',
    fontFamily: bodyTextFont,
  },
});

export default styles;
