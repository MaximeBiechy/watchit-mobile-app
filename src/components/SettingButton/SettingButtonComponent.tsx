import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles.ts';
import { FONT_SIZE_24 } from '../../styles/typography.ts';

interface SettingButtonComponentProps {
  onPress: () => void;
  leftIcon: string;
  leftIconColor?: string;
  title: string;
  rightText?: string;
}

function SettingButtonComponent({ onPress, leftIcon, leftIconColor = 'white', title, rightText }: SettingButtonComponentProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.settingButtonContainer}>
      <View style={styles.leftSide}>
        <Icon name={leftIcon} size={FONT_SIZE_24} color={leftIconColor} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.rightSide}>
        <Text style={styles.rightText}>{rightText}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default SettingButtonComponent;
