import { StyleSheet } from 'react-native';
import { gray } from '../../styles/colors.ts';
import { headingSectionFont } from '../../styles/typography.ts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pagination: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 20,
    justifyContent: 'space-around',
    width: '100%',
  },
  dotContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  skipText: {
    color: gray,
    fontSize: 18,
    fontFamily: headingSectionFont,
  },
  nextText: {
    color: 'white',
    fontSize: 18,
    fontFamily: headingSectionFont,
  },
});

export default styles;
