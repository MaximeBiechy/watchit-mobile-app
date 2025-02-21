import { StyleSheet } from 'react-native';
import { authTitle, bodyInfoFont } from '../../styles/typography.ts';
import { gray } from '../../styles/colors.ts';
import { PADDING_HORIZONTAL, SCREEN_WIDTH } from '../../styles/responsives.ts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 100,
    width: SCREEN_WIDTH - PADDING_HORIZONTAL * 2,
  },
  title: {
    ...authTitle,
    marginVertical: 8,
    textAlign: 'center',
  },
  description: {
    fontFamily: bodyInfoFont,
    fontSize: 14,
    color: gray,
    textAlign: 'center',
  },
});

export default styles;
