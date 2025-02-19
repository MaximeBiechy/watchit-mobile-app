import React, { useState } from 'react';
import { TextInput, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles.ts';
import assets from '../../assets/assets.ts';
import { gray } from '../../styles/colors.ts';

interface InputProps {
  placeholder?: string;
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
}

function InputComponent({ placeholder, value, onChangeText, secureTextEntry = false, keyboardType = 'default' }: InputProps) {
  const [isPasswordVisible, setPasswordVisible] = useState(!secureTextEntry);

  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          secureTextEntry={!isPasswordVisible}
          keyboardType={keyboardType}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor={gray}
        />
        {secureTextEntry && (
          <TouchableOpacity onPress={() => setPasswordVisible(!isPasswordVisible)}>
            {isPasswordVisible ? (
              <Icon name={assets.icons.eye} size={24} color="white" />
            ) : (
              <Icon name={assets.icons.eyeOff} size={24} color="white" />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

export default InputComponent;
