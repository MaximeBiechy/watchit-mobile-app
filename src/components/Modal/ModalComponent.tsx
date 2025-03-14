import { Image, Modal, Text, TouchableOpacity, View } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import styles from './styles.ts';
import { highlightColor, primaryColor } from '../../styles/colors.ts';

interface ModalProps {
  visible: boolean;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  confirmColor?: string;
  cancelColor?: string;
  icon?: any;
  onConfirm: () => void;
  onCancel: () => void;
}

function ModalComponent({
  visible,
  title,
  message,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  confirmColor = primaryColor,
  cancelColor = highlightColor,
  icon,
  onConfirm,
  onCancel,
}: ModalProps) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <BlurView style={styles.absolute} blurType="dark" blurAmount={10} />
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {icon && <Image source={icon} style={styles.modalIcon} />}
          <Text style={styles.modalTitle}>{title}</Text>
          <Text style={styles.modalMessage}>{message}</Text>
          <View style={styles.modalButtons}>
            <TouchableOpacity style={[styles.button, { borderColor: confirmColor }]} onPress={onConfirm}>
              <Text style={[styles.buttonText, { color: highlightColor }]}>{confirmText}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { backgroundColor: cancelColor }]} onPress={onCancel}>
              <Text style={[styles.buttonText, { color: 'white' }]}>{cancelText}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default ModalComponent;
