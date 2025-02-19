import React from 'react';
import { View } from 'react-native';
import InputComponent from '../Input/InputComponent.tsx';
import ButtonComponent from '../Button/ButtonComponent.tsx';
import styles from './styles.ts';

interface InputConfig {
  placeholder: string;
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
}

interface FormComponentProps {
  inputs: InputConfig[];
  onSubmit: () => void;
  submitButtonTitle: string;
}

function FormComponent({ inputs, onSubmit, submitButtonTitle }: FormComponentProps) {
  return (
    <View style={styles.formContainer}>
      {inputs.map((input) => (
        <InputComponent
          key={input.placeholder}
          placeholder={input.placeholder}
          value={input.value}
          onChangeText={input.onChangeText}
          secureTextEntry={input.secureTextEntry}
          keyboardType={input.keyboardType}
        />
      ))}
      <ButtonComponent title={submitButtonTitle} onPress={onSubmit} />
    </View>
  );
}

export default FormComponent;
