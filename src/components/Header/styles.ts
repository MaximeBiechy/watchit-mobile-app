import { StyleSheet } from 'react-native';
import { navigationTopBarTitle } from '../../styles/typography.ts';

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingHorizontal: 6,
    paddingTop: 8,
    paddingBottom: 20,
  },
  leftSide: {
    width: 40,
    paddingLeft: 8,
  },
  title: {
    ...navigationTopBarTitle,
    color: 'white',
  },
  rightSide: {
    width: 40,
    paddingRight: 8,
  },
});

export default styles;
