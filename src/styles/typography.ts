import { RFValue } from 'react-native-responsive-fontsize';
import fonts from '../assets/fonts.ts';
import { gray } from './colors.ts';
import { SCREEN_WIDTH } from './responsives.ts';

export const FONT_SIZE_28 = RFValue(28);
export const FONT_SIZE_26 = RFValue(26);
export const FONT_SIZE_24 = RFValue(24);
export const FONT_SIZE_22 = RFValue(22);
export const FONT_SIZE_18 = RFValue(18);
export const FONT_SIZE_16 = RFValue(16);
export const FONT_SIZE_14 = RFValue(14);
export const FONT_SIZE_12 = RFValue(12);
export const FONT_SIZE_10 = RFValue(10);

export const headingTitleFont = fonts.Montserrat.semiBold;
export const headingSectionFont = fonts.Poppins.semiBold;
export const bodyInfoFont = fonts.Montserrat.medium;
export const bodyTextFont = fonts.Poppins.regular;
export const bodyLongTextFont = fonts.Roboto.regular;

export const authTitle = {
  fontFamily: headingTitleFont,
  fontSize: FONT_SIZE_22,
  color: 'white',
};

export const authSubtitle = {
  fontFamily: bodyInfoFont,
  fontSize: FONT_SIZE_10,
  color: 'white',
  maxWidth: SCREEN_WIDTH * 0.8,
};

export const authDescription = {
  fontFamily: bodyInfoFont,
  fontSize: FONT_SIZE_12,
  color: gray,
};

export const sectionTitle = {
  fontFamily: headingSectionFont,
  fontSize: FONT_SIZE_16,
};

export const navigationTopBarTitle = {
  fontFamily: headingTitleFont,
  fontSize: FONT_SIZE_14,
};

export const bodyLongText = {
  fontFamily: bodyLongTextFont,
  fontSize: FONT_SIZE_12,
};

export const bodyTextBold = {
  fontFamily: bodyInfoFont,
  fontSize: FONT_SIZE_12,
};

export const bodyInfo = {
  fontFamily: bodyInfoFont,
  fontSize: FONT_SIZE_10,
};

export const bodyText = {
  fontFamily: bodyTextFont,
  fontSize: FONT_SIZE_10,
};
