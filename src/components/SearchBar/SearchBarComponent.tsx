import { TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles.ts';
import { FONT_SIZE_18 } from '../../styles/typography.ts';
import { gray } from '../../styles/colors.ts';
import assets from "../../assets/assets.ts";

interface SearchBarProps {
  placeholder?: string;
  rightIconName?: string;
  onPress?: () => void;
  // eslint-disable-next-line no-unused-vars
  onSearch?: (text: string) => void;
  autoFocus?: boolean;
}

function SearchBarComponent({ placeholder = 'Search', rightIconName, onPress, onSearch, autoFocus = false }: SearchBarProps) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8} onPress={onPress}>
      <Icon name={assets.icons.search} size={FONT_SIZE_18} color={gray} style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={gray}
        onChangeText={onSearch}
        editable={!onPress}
        autoFocus={autoFocus}
      />
      {rightIconName && <Icon name={rightIconName} size={FONT_SIZE_18} color="white" style={styles.icon} />}
    </TouchableOpacity>
  );
}

export default SearchBarComponent;
