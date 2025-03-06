import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { AuthStackParamList } from './RootStackParamList.tsx';
import { ChooseConnectionModeScreen, SignInScreen, SignUpScreen, EmailVerification } from '../screens/index.ts';
import { renderHeader } from '../components/Header/HeaderComponent.tsx';
import { animation, animationDuration } from '../styles/transitionScreens.ts';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

function AuthNavigator() {
  const { t } = useTranslation();

  return (
    <AuthStack.Navigator
      initialRouteName="ChooseConnectionMode"
      screenOptions={{
        animation, // ? Avoid flickering effect when navigating between screens
        animationDuration, // ? It doesn't seem to work
      }}
    >
      <AuthStack.Screen name="ChooseConnectionMode" component={ChooseConnectionModeScreen} options={{ headerShown: false }} />
      <AuthStack.Screen
        name="Signin"
        component={SignInScreen}
        options={({ navigation }) => ({
          header: () => renderHeader(t('signin:screenTitle'), navigation, true),
        })}
      />
      <AuthStack.Screen
        name="Signup"
        component={SignUpScreen}
        options={({ navigation }) => ({
          header: () => renderHeader(t('signup:screenTitle'), navigation, true),
        })}
      />
      <AuthStack.Screen
        name="EmailVerification"
        component={EmailVerification}
        options={({ navigation }) => ({
          header: () => renderHeader(t('emailVerification:screenTitle'), navigation, true),
        })}
      />
    </AuthStack.Navigator>
  );
}

export default AuthNavigator;
