import { StyleSheet } from 'react-native';
import { headingSectionFont } from '../../styles/typography.ts';
import { highlightColor } from '../../styles/colors.ts';

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: highlightColor,
    padding: 10,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  buttonTitle: {
    fontFamily: headingSectionFont,
    fontSize: 16,
    color: 'white',
  },
});

export default styles;
