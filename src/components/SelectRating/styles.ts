import { StyleSheet } from 'react-native';
import { darkGray, primaryColor } from '../../styles/colors.ts';
import { FONT_SIZE_14, FONT_SIZE_16 } from '../../styles/typography.ts';
import { SCREEN_WIDTH } from '../../styles/responsives.ts';

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: primaryColor,
    borderRadius: 12,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    color: 'white',
    fontSize: FONT_SIZE_16,
    marginBottom: 12,
  },
  notesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  noteButton: {
    backgroundColor: darkGray,
    borderRadius: 20,
    width: SCREEN_WIDTH * 0.1,
    height: SCREEN_WIDTH * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  noteText: {
    color: 'white',
    fontSize: FONT_SIZE_14,
  },
});

export default styles;
