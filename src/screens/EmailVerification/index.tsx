import React from 'react';
import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import OtpInputs from 'react-native-otp-inputs';
import { setUserData } from '../../store/user/userSlice.ts';
import { AuthStackParamList } from '../../navigation/RootStackParamList.tsx';
import styles from './styles.ts';

type Props = NativeStackScreenProps<AuthStackParamList, 'EmailVerification'>;

function EmailVerificationScreen({ route }: Props) {
  const { t } = useTranslation('emailVerification');
  const { userData } = route.params;
  const dispatch = useDispatch();

  const handleEmailVerification = () => {
    dispatch(setUserData({ ...userData, onboardingCompleted: false }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('title')}</Text>
      <Text style={styles.subtitle}>
        {t('subtitle')} <Text style={styles.emailText}>{userData.email}</Text>
      </Text>

      <OtpInputs numberOfInputs={4} handleChange={() => {}} autofillFromClipboard={false} />

      <View style={styles.textContainer}>
        <Text style={styles.questionText}>{t('question')}</Text>
        <Text style={[styles.functionText]} onPress={() => {}}>
          {t('resend')}
        </Text>
      </View>
    </View>
  );
}

export default EmailVerificationScreen;
