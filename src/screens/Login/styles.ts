import { StyleSheet } from 'react-native';
import { authTitle, bodyInfo } from '../../styles/typography.ts';
import { subTitleColor } from '../../styles/colors.ts';

const style = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 60,
    gap: 15,
  },
  title: {
    ...authTitle,
    color: 'white',
  },
  subtitle: {
    ...bodyInfo,
    color: subTitleColor,
  },
});

export default style;
