import React from 'react';
import { Modal, TouchableOpacity, Text, View } from 'react-native';
import styles from './styles.ts';

interface SelectRatingProps {
  visible: boolean;
  onClose: () => void;
  onSelectRating: (rating: number) => void;
}

function SelectRating({ visible, onClose, onSelectRating }: SelectRatingProps) {
  const notes = Array.from({ length: 11 }, (_, i) => i);

  return (
    <Modal animationType="fade" transparent visible={visible} onRequestClose={onClose}>
      <TouchableOpacity style={styles.modalOverlay} activeOpacity={1} onPress={onClose}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Note ce film</Text>
          <View style={styles.notesContainer}>
            {notes.map((note) => (
              <TouchableOpacity
                key={note}
                style={styles.noteButton}
                onPress={() => {
                  onSelectRating(note);
                  onClose();
                }}
              >
                <Text style={styles.noteText}>{note}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

export default SelectRating;
