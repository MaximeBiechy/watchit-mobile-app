import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles.ts';

interface ButtonProps {
  title: string;
  onPress: () => void;
  buttonStyle?: object;
  titleStyle?: object;
}

function ButtonComponent({ title, onPress, buttonStyle = {}, titleStyle = {} }: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.buttonContainer, buttonStyle]}>
      <Text style={[styles.buttonTitle, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

export default ButtonComponent;
