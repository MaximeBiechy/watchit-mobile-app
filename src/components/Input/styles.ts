import { StyleSheet } from 'react-native';
import { darkGray } from '../../styles/colors.ts';

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
    fontSize: 16,
  },
});

export default styles;
