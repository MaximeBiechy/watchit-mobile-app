import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProfileStackParamList } from './RootStackParamList.tsx';
import { UserProfile } from '../screens/index.ts';
import { renderHeader } from '../components/Header/HeaderComponent.tsx';

const ProfileStack = createNativeStackNavigator<ProfileStackParamList>();

function ProfileNavigator() {
  return (
    <ProfileStack.Navigator initialRouteName="UserProfile">
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
