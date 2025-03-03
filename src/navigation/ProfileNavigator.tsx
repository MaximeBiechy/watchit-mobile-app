import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProfileStackParamList } from './RootStackParamList.tsx';
import { UserProfile } from '../screens/index.ts';
import { renderHeader } from '../components/Header/HeaderComponent.tsx';
import { PADDING_HORIZONTAL, PADDING_VERTICAL } from '../styles/responsives.ts';
import { animation, animationDuration } from '../styles/transitionScreens.ts';

const ProfileStack = createNativeStackNavigator<ProfileStackParamList>();

function ProfileNavigator() {
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
        component={UserProfile}
        options={({ navigation }) => ({
          header: () => renderHeader('My Profile', navigation, false),
        })}
      />
    </ProfileStack.Navigator>
  );
}

export default ProfileNavigator;
