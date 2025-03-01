import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import FormComponent from '../../components/Form/FormComponent.tsx';
import styles from './styles.ts';
import { signIn } from '../../services/api/auth.ts';

function SignInScreen() {
  const { t } = useTranslation('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const response = await signIn(email, password);

    if (!response.error) {
      // It's working like this for the navigation.
      // When the user is logged in, the app will navigate to the HomeScreen.
      console.log('User logged in');
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
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{t('title')}</Text>
        <Text style={styles.subtitle}>{t('subtitle')}</Text>
      </View>
      <FormComponent inputs={inputs} onSubmit={handleLogin} submitButtonTitle={t('submitButtonTitle')} />
    </View>
  );
}

export default SignInScreen;
