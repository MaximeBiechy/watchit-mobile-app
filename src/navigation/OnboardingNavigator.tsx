import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OnboardingScreen, ChooseAvatar } from '../screens/index.ts';
import { renderHeader } from '../components/Header/HeaderComponent.tsx';

const OnboardingStack = createNativeStackNavigator();

function OnboardingNavigator() {
  return (
    <OnboardingStack.Navigator initialRouteName="Onboarding">
      <OnboardingStack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={({ navigation }) => ({
          header: () => renderHeader('', navigation, false),
        })}
      />
      <OnboardingStack.Screen
        name="ChooseAvatar"
        component={ChooseAvatar}
        options={({ navigation }) => ({
          header: () => renderHeader('', navigation, false),
        })}
      />
    </OnboardingStack.Navigator>
  );
}

export default OnboardingNavigator;
