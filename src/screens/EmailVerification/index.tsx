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
import { signIn } from '../../services/api/auth.ts';

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
    const validateOtp = async () => {
      if (otp.length !== 4) {
        setBorderColor(darkGray);
        return;
      }

      // TODO: Replace '1234' with the actual OTP validation logic
      if (otp !== '1234') {
        showToast('error', 'errorMessage'); // TODO: Add the error message key to the i18n file (edit code key with the backend error code)
        setBorderColor(errorColor);
        return;
      }

      const response = await signIn(userData.email, userData.password);
      if (response.error) {
        setBorderColor(errorColor);
        return;
      }

      setBorderColor(successColor);
      showToast('success', t('success'));
      setTimeout(() => {
        dispatch(setUserData({ ...response.user }));
      }, 2000);
    };

    validateOtp();
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
