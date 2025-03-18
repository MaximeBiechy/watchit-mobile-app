import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { selectUserData, setUserData } from '../../store/user/userSlice.ts';
import FormComponent from '../../components/Form/FormComponent.tsx';
import useHideTabBar from '../../hooks/useHideTabBar.ts';
import styles from './styles.ts';
import { getUserById, updateUserProfile } from '../../services/api/users.ts';
import { ProfileNavigationProp } from '../../navigation/RootStackParamList.tsx';
import AsyncStorage from '@react-native-async-storage/async-storage';

function EditProfileScreen() {
  useHideTabBar();

  const { t } = useTranslation('editProfile');
  const user = useSelector(selectUserData);
  const navigation = useNavigation<ProfileNavigationProp>();
  const dispatch = useDispatch();
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

  const handleUpdateProfile = async () => {
    const updatedData = {
      username: nickName,
      email,
      password: password === '**********' ? undefined : password,
    };

    const response = await updateUserProfile(user.id!, updatedData);

    if (!response.error) {
      const userData = await getUserById(user.id!);
      dispatch(setUserData(userData.user));
      if (navigation.canGoBack()) {
        navigation.goBack();
      }
    }
  };

  return (
    <ScrollView style={styles.container}>
      <FormComponent inputs={inputs} onSubmit={handleUpdateProfile} submitButtonTitle={t('submitButtonTitle')} />
    </ScrollView>
  );
}

export default EditProfileScreen;
