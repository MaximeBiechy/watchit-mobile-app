import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import FormComponent from '../../components/Form/FormComponent.tsx';
import styles from './styles.ts';

function SignUpScreen() {
  const { t } = useTranslation('signup');
  const [nickName, setNickName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Handle SignUp logic here
  };

  const inputs = [
    {
      placeholder: t('placeholderNickName'),
      value: nickName,
      onChangeText: setNickName,
    },
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
    },
  ];

  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{t('title')}</Text>
        <Text style={styles.subtitle}>{t('subtitle')}</Text>
      </View>
      <FormComponent inputs={inputs} onSubmit={handleSignUp} submitButtonTitle={t('submitButtonTitle')} />
    </View>
  );
}

export default SignUpScreen;
