import { StyleSheet } from 'react-native';
import { darkGray } from '../../styles/colors.ts';
import { bodyTextFont } from '../../styles/typography.ts';

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    color: 'white',
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: darkGray,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  input: {
    flex: 1,
    color: 'white',
    fontFamily: bodyTextFont,
    fontSize: 14,
  },
});

export default styles;
