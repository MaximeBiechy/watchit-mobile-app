import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { AuthStackParamList } from './RootStackParamList.tsx';
import { ChooseConnectionModeScreen, SignInScreen, SignUpScreen, EmailVerification } from '../screens/index.ts';
import { renderHeader } from '../components/Header/HeaderComponent.tsx';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

function AuthNavigator() {
  const { t } = useTranslation();

  return (
    <AuthStack.Navigator initialRouteName="ChooseConnectionMode">
      <AuthStack.Screen name="ChooseConnectionMode" component={ChooseConnectionModeScreen} options={{ headerShown: false }} />
      <AuthStack.Screen
        name="Signin"
        component={SignInScreen}
        options={({ navigation }) => ({
          header: () => renderHeader(t('login:screenTitle'), navigation, true),
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
