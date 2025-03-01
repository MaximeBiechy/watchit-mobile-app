import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import FormComponent from '../../components/Form/FormComponent.tsx';
import styles from './styles.ts';
import { register } from '../../services/api/auth.ts';
import { AuthNavigationProp } from '../../navigation/RootStackParamList.tsx';

function SignUpScreen() {
  const { t } = useTranslation('signup');
  const navigation = useNavigation<AuthNavigationProp>();
  const [nickName, setNickName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    const response = await register(nickName, email, password);

    if (!response.error) {
      // It's working like this for the navigation.
      // When the user is registered, the app will navigate to the HomeScreen.
      navigation.navigate('EmailVerification', { userData: { email, password } });
    }
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
