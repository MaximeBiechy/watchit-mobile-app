import { StyleSheet } from 'react-native';
import { PADDING_VERTICAL, SCREEN_WIDTH } from '../../styles/responsives.ts';
import { sectionTitle } from '../../styles/typography.ts';

const styles = StyleSheet.create({
  container: {
    marginTop: PADDING_VERTICAL * 2,
  },
  providersContainer: {
    marginVertical: PADDING_VERTICAL,
    gap: PADDING_VERTICAL,
  },
  providerLogo: {
    width: SCREEN_WIDTH / 4,
    aspectRatio: 3,
    borderRadius: 24,
  },
  sectionTitle: {
    ...sectionTitle,
    color: 'white',
    marginVertical: PADDING_VERTICAL,
  },
  flatListContainer: {
    flexDirection: 'column',
    gap: PADDING_VERTICAL * 2,
  },
});

export default styles;
