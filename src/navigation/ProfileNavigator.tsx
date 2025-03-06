import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import { ProfileStackParamList } from './RootStackParamList.tsx';
import { UserProfileScreen, EditProfileScreen } from '../screens/index.ts';
import { renderHeader } from '../components/Header/HeaderComponent.tsx';
import { PADDING_HORIZONTAL, PADDING_VERTICAL } from '../styles/responsives.ts';
import { animation, animationDuration } from '../styles/transitionScreens.ts';

const ProfileStack = createNativeStackNavigator<ProfileStackParamList>();

function ProfileNavigator() {
  const { t } = useTranslation();

  return (
    <ProfileStack.Navigator
      initialRouteName="UserProfile"
      screenOptions={{
        contentStyle: { paddingHorizontal: PADDING_HORIZONTAL, paddingTop: PADDING_VERTICAL },
        animation, // ? Avoid flickering effect when navigating between screens
        animationDuration, // ? It doesn't seem to work
      }}
    >
      <ProfileStack.Screen
        name="UserProfile"
        component={UserProfileScreen}
        options={({ navigation }) => ({
          header: () => renderHeader(t('profile:screenTitle'), navigation, false),
        })}
      />
      <ProfileStack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={({ navigation }) => ({
          header: () => renderHeader(t('editProfile:screenTitle'), navigation, true),
        })}
      />
    </ProfileStack.Navigator>
  );
}

export default ProfileNavigator;
