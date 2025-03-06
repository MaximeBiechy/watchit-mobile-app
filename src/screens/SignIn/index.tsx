import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
import FormComponent from '../../components/Form/FormComponent.tsx';
import styles from './styles.ts';
import { signIn } from '../../services/api/auth.ts';
import { setUserData } from '../../store/user/userSlice.ts';

function SignInScreen() {
  const { t } = useTranslation('signin');
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const response = await signIn(email, password);

    if (!response.error) {
      dispatch(setUserData({ ...response.user, onboardingCompleted: true }));
    }
  };

  const inputs = [
    {
      placeholder: t('placeholderEmail'),
      value: email,
      onChangeText: setEmail,
    },
    {
      placeholder: t('placeholderPassword'),
      value: password,
      onChangeText: setPassword,
      secureTextEntry: true,
      message: t('forgotPassword'),
    },
  ];

  return (
    <ScrollView>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{t('title')}</Text>
        <Text style={styles.subtitle}>{t('subtitle')}</Text>
      </View>
      <FormComponent inputs={inputs} onSubmit={handleLogin} submitButtonTitle={t('submitButtonTitle')} />
    </ScrollView>
  );
}

export default SignInScreen;
