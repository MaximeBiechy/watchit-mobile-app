import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { selectUserData } from '../../store/user/userSlice.ts';
import FormComponent from '../../components/Form/FormComponent.tsx';
import useHideTabBar from '../../hooks/useHideTabBar.ts';
import styles from './styles.ts';

function EditProfileScreen() {
  useHideTabBar();

  const { t } = useTranslation('editProfile');
  const user = useSelector(selectUserData);
  const [nickName, setNickName] = useState(user.username!);
  const [email, setEmail] = useState(user.email!);
  const [password, setPassword] = useState('**********');

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
      onFocus: () => setPassword(''),
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <FormComponent inputs={inputs} onSubmit={() => {}} submitButtonTitle={t('submitButtonTitle')} />
    </ScrollView>
  );
}

export default EditProfileScreen;
