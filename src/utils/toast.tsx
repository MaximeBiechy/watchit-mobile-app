import React from 'react';
import { View, Text } from 'react-native';
import Toast, { BaseToastProps } from 'react-native-toast-message';

function CustomToast({ text1, backgroundColor }: BaseToastProps & { backgroundColor: string }) {
  return (
    <View
      style={{
        backgroundColor,
        padding: 12,
        borderRadius: 10,
        marginHorizontal: 20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
      }}
    >
      <Text style={{ color: '#fff', fontWeight: 'bold' }}>{text1}</Text>
    </View>
  );
}

export const toastConfig = {
  success: (props: BaseToastProps) => <CustomToast text1={props.text1} backgroundColor="#4CAF50" />,
  error: (props: BaseToastProps) => <CustomToast text1={props.text1} backgroundColor="#F44336" />,
  info: (props: BaseToastProps) => <CustomToast text1={props.text1} backgroundColor="#2196F3" />,
};

export const showToast = (type: 'success' | 'error' | 'info', message: string) => {
  Toast.show({
    type,
    text1: message,
  });
};
