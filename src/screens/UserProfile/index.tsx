import { Image, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { logout, selectUserData } from '../../store/user/userSlice.ts';
import styles from './styles.ts';
import assets from '../../assets/assets.ts';
import SettingButtonComponent from '../../components/SettingButton/SettingButtonComponent.tsx';
import { errorColor, highlightColor } from '../../styles/colors.ts';
import { ProfileNavigationProp } from '../../navigation/RootStackParamList.tsx';
import ModalComponent from '../../components/Modal/ModalComponent.tsx';
import i18n from '../../locales/i18n.ts';
import { deleteAccount, updateUserSettings } from '../../services/api/users.ts';

const images: number[] = [
  assets.images.Onboarding.avatar.avatar1,
  assets.images.Onboarding.avatar.avatar2,
  assets.images.Onboarding.avatar.avatar3,
  assets.images.Onboarding.avatar.avatar4,
  assets.images.Onboarding.avatar.avatar5,
  assets.images.Onboarding.avatar.avatar6,
  assets.images.Onboarding.avatar.avatar7,
  assets.images.Onboarding.avatar.avatar8,
  assets.images.Onboarding.avatar.avatar9,
  assets.images.Onboarding.avatar.avatar10,
  assets.images.Onboarding.avatar.avatar11,
  assets.images.Onboarding.avatar.avatar12,
  assets.images.Onboarding.avatar.avatar13,
  assets.images.Onboarding.avatar.avatar14,
  assets.images.Onboarding.avatar.avatar15,
  assets.images.Onboarding.avatar.avatar16,
  assets.images.Onboarding.avatar.avatar17,
  assets.images.Onboarding.avatar.avatar18,
  assets.images.Onboarding.avatar.avatar19,
  assets.images.Onboarding.avatar.avatar20,
  assets.images.Onboarding.avatar.avatar21,
];

function UserProfileScreen() {
  const { t } = useTranslation('profile');
  const navigation = useNavigation<ProfileNavigationProp>();
  const user = useSelector(selectUserData);
  const dispatch = useDispatch();
  const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false);
  const [isDeleteAccountModalVisible, setIsDeleteAccountModalVisible] = useState(false);
  const [isFinalDeleteAccountModalVisible, setIsFinalDeleteAccountModalVisible] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    setIsLogoutModalVisible(false);
  };

  const handleDeleteAccount = async () => {
    const response = await deleteAccount(user.id!);
    if (!response.error) {
      dispatch(logout());
    }
    setIsFinalDeleteAccountModalVisible(false);
  };

  const toggleFrEnLanguage = async () => {
    const toggleLanguage = i18n.language === 'en' ? 'fr' : 'en';
    await updateUserSettings(user.id!, { language: toggleLanguage });
    i18n.changeLanguage(toggleLanguage);
  };

  const avatarIndex = user.avatar !== null && user.avatar >= 0 && user.avatar < images.length ? user.avatar : 0;

  return (
    <View style={styles.container}>
      <Image source={images[avatarIndex]} style={styles.avatar} />
      <Text style={styles.username}>{user.username}</Text>
      <Text style={styles.email}>{user.email}</Text>
      <View style={styles.settingsContainer}>
        <View style={[styles.settingFirstBlock, styles.settingCommonStyle]}>
          <SettingButtonComponent
            onPress={() => {
              navigation.navigate('EditProfile');
            }}
            leftIcon={assets.icons.editProfile}
            title={t('editProfile')}
          />
          {/* <SettingButtonComponent */}
          {/*  onPress={() => {}} */}
          {/*  leftIcon={assets.icons.notification} */}
          {/*  title={t('notifications')} */}
          {/*  rightText="ON" */}
          {/* /> */}
          <SettingButtonComponent
            onPress={toggleFrEnLanguage}
            leftIcon={assets.icons.language}
            title={t('language')}
            rightText={t('languageUser')}
          />
        </View>
        {/* <View style={[styles.settingSecondBlock, styles.settingCommonStyle]}> */}
        {/*  <SettingButtonComponent onPress={() => {}} leftIcon={assets.icons.lock} title={t('privacy')} /> */}
        {/*  <SettingButtonComponent onPress={() => {}} leftIcon={assets.icons.settings} title={t('support')} /> */}
        {/* </View> */}
        <View style={[styles.settingThirdBlock, styles.settingCommonStyle]}>
          <SettingButtonComponent
            onPress={() => setIsLogoutModalVisible(true)}
            leftIcon={assets.icons.logout}
            leftIconColor={errorColor}
            title={t('logout')}
          />
          <SettingButtonComponent
            onPress={() => setIsDeleteAccountModalVisible(true)}
            leftIcon={assets.icons.trash}
            leftIconColor={errorColor}
            title={t('deleteAccount')}
          />
        </View>
      </View>
      <ModalComponent
        visible={isLogoutModalVisible}
        title={t('logoutConfirmationTitle')}
        message={t('logoutConfirmationMessage')}
        confirmText={t('logoutConfirmationConfirm')}
        cancelText={t('logoutConfirmationCancel')}
        confirmColor={highlightColor}
        cancelColor={highlightColor}
        icon={assets.images.question}
        onConfirm={handleLogout}
        onCancel={() => setIsLogoutModalVisible(false)}
      />
      <ModalComponent
        visible={isDeleteAccountModalVisible}
        title={t('deleteAccountConfirmationTitle')}
        message={t('deleteAccountConfirmationMessage')}
        confirmText={t('deleteAccountConfirmationConfirm')}
        cancelText={t('deleteAccountConfirmationCancel')}
        confirmColor={highlightColor}
        cancelColor={highlightColor}
        icon={assets.images.question}
        onConfirm={() => {
          setIsDeleteAccountModalVisible(false);
          setIsFinalDeleteAccountModalVisible(true);
        }}
        onCancel={() => setIsDeleteAccountModalVisible(false)}
      />
      <ModalComponent
        visible={isFinalDeleteAccountModalVisible}
        title={t('finalDeleteAccountConfirmationTitle')}
        message={t('finalDeleteAccountConfirmationMessage')}
        confirmText={t('finalDeleteAccountConfirmationConfirm')}
        cancelText={t('finalDeleteAccountConfirmationCancel')}
        confirmColor={highlightColor}
        cancelColor={highlightColor}
        icon={assets.images.warning}
        onConfirm={handleDeleteAccount}
        onCancel={() => setIsFinalDeleteAccountModalVisible(false)}
      />
    </View>
  );
}

export default UserProfileScreen;
