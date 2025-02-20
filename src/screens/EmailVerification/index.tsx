import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/RootStackParamList.tsx';
import { setUserData } from '../../store/user/userSlice.ts';

type Props = NativeStackScreenProps<AuthStackParamList, 'EmailVerification'>;

function EmailVerificationScreen({ route }: Props) {
  const { userData } = route.params;
  const dispatch = useDispatch();

  const handleEmailVerification = () => {
    // Simulate email verification process
    // After successful verification, log in the user
    dispatch(setUserData({ ...userData, onboardingCompleted: false }));
  };

  return (
    <View>
      <Text>Email Verification Screen</Text>
      <Button title="Verify Email" onPress={handleEmailVerification} />
    </View>
  );
}

export default EmailVerificationScreen;
