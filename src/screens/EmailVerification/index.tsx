import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import OtpInputs from 'react-native-otp-inputs';
import { setUserData } from '../../store/user/userSlice.ts';
import { AuthStackParamList } from '../../navigation/RootStackParamList.tsx';
import styles from './styles.ts';
import { cursorColor, darkGray, errorColor, successColor } from '../../styles/colors.ts';
import { showToast } from '../../utils/toast.tsx';

type Props = NativeStackScreenProps<AuthStackParamList, 'EmailVerification'>;

function EmailVerificationScreen({ route }: Props) {
  const { t } = useTranslation('emailVerification');
  const { userData } = route.params;
  const dispatch = useDispatch();
  const [otp, setOtp] = useState('');
  const [borderColor, setBorderColor] = useState(darkGray);

  // ? OTP validation logic. Had to use setTimeout to avoid the following warning:
  // ? "Cannot update a component (EmailVerificationScreen) while rendering a different component (ForwardRef)."
  const handleChange = (otpValue: string) => {
    setTimeout(() => {
      setOtp(otpValue);
    }, 0);
  };
  useEffect(() => {
    if (otp.length === 4) {
      if (otp === '1234') {
        // Replace '1234' with the actual OTP validation logic
        setBorderColor(successColor);
        showToast('success', 'successMessage');
        setTimeout(() => {
          dispatch(setUserData({ ...userData, onboardingCompleted: true }));
        }, 2000);
      } else {
        showToast('error', 'errorMessage');
        setBorderColor(errorColor);
      }
    } else {
      setBorderColor(darkGray);
    }
  }, [otp, dispatch, userData]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('title')}</Text>
      <Text style={styles.subtitle}>
        {t('subtitle')} <Text style={styles.emailText}>{userData.email}</Text>
      </Text>

      <OtpInputs
        numberOfInputs={4}
        handleChange={handleChange}
        autofillFromClipboard={false}
        style={styles.otpContainer}
        inputStyles={[styles.otpInput, { borderColor }]}
        focusStyles={styles.otpInputFocused}
        cursorColor={cursorColor}
      />

      <View style={styles.textContainer}>
        <Text style={styles.questionText}>{t('question')}</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={[styles.functionText]}>{t('resend')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default EmailVerificationScreen;
