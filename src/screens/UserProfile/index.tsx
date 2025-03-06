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

function UserProfileScreen() {
  const { t } = useTranslation('profile');
  const navigation = useNavigation<ProfileNavigationProp>();
  const user = useSelector(selectUserData);
  const dispatch = useDispatch();
  const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    setIsLogoutModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Image source={assets.images.Onboarding.avatar.avatar1} style={styles.avatar} />
      <Text style={styles.username}>{user.username}</Text>
      <Text style={styles.email}>{user.email}</Text>
      <View style={styles.settingsContainer}>
        <View style={[styles.settingFirstBlock, styles.settingCommonStyle]}>
          <SettingButtonComponent
            onPress={() => {
              navigation.navigate('EditProfile');
            }}
            leftIcon={assets.icons.eyeOff}
            title={t('editProfile')}
          />
          <SettingButtonComponent
            onPress={() => {}}
            leftIcon={assets.icons.notification}
            title={t('notifications')}
            rightText="ON"
          />
          <SettingButtonComponent onPress={() => {}} leftIcon={assets.icons.language} title={t('language')} rightText="English" />
        </View>
        <View style={[styles.settingSecondBlock, styles.settingCommonStyle]}>
          <SettingButtonComponent onPress={() => {}} leftIcon={assets.icons.lock} title={t('privacy')} />
          <SettingButtonComponent onPress={() => {}} leftIcon={assets.icons.settings} title={t('support')} />
        </View>
        <View style={[styles.settingThirdBlock, styles.settingCommonStyle]}>
          <SettingButtonComponent
            onPress={() => setIsLogoutModalVisible(true)}
            leftIcon={assets.icons.logout}
            leftIconColor={errorColor}
            title={t('logout')}
          />
          <SettingButtonComponent
            onPress={() => {}}
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
    </View>
  );
}

export default UserProfileScreen;
