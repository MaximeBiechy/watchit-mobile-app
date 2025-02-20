import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Onboarding1Screen } from '../screens/index.ts';
import { renderHeader } from '../components/Header/HeaderComponent.tsx';

const OnboardingStack = createNativeStackNavigator();

function OnboardingNavigator() {
  return (
    <OnboardingStack.Navigator initialRouteName="Onboarding1">
      <OnboardingStack.Screen
        name="Onboarding1"
        component={Onboarding1Screen}
        options={({ navigation }) => ({
          header: () => renderHeader('onboarding1', navigation, true),
        })}
      />
    </OnboardingStack.Navigator>
  );
}

export default OnboardingNavigator;
