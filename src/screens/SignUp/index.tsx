import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
// import { useNavigation } from '@react-navigation/natikve';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import FormComponent from '../../components/Form/FormComponent.tsx';
import styles from './styles.ts';
import { register, signIn } from '../../services/api/auth.ts';
// import { AuthNavigationProp } from '../../navigation/RootStackParamList.tsx';
import { setUserData } from '../../store/user/userSlice.ts';

function SignUpScreen() {
  const { t } = useTranslation('signup');
  // const navigation = useNavigation<AuthNavigationProp>();
  const dispatch = useDispatch();
  const [nickName, setNickName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    const response = await register(nickName, email, password);

    if (!response.error) {
      // TODO: implemented later
      // navigation.navigate('EmailVerification', { userData: { email, password } });
      const res = await signIn(email, password);
      dispatch(setUserData({ ...res.user }));
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
    <ScrollView>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{t('title')}</Text>
        <Text style={styles.subtitle}>{t('subtitle')}</Text>
      </View>
      <FormComponent inputs={inputs} onSubmit={handleSignUp} submitButtonTitle={t('submitButtonTitle')} />
    </ScrollView>
  );
}

export default SignUpScreen;
