import { StyleSheet } from 'react-native';
import { authTitle, bodyInfoFont } from '../../styles/typography.ts';
import { gray } from '../../styles/colors.ts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 100,
  },
  image: {
    width: 300,
  },
  title: {
    ...authTitle,
    color: 'white',
    marginVertical: 8,
  },
  description: {
    fontFamily: bodyInfoFont,
    fontSize: 14,
    color: gray,
    textAlign: 'center',
  },
});

export default styles;
