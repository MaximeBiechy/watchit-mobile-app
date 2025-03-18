import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MainNavigator from './MainNavigator.tsx';
import AuthNavigator from './AuthNavigator.tsx';
import OnboardingNavigator from './OnboardingNavigator.tsx';
import darkTheme from '../styles/themes.ts';
import { RootStackParamList } from './RootStackParamList.tsx';
import { selectIsAuthenticated, selectOnboardingCompleted, loadUserData, setUserAvatar } from '../store/user/userSlice.ts';
import { PADDING_HORIZONTAL, PADDING_VERTICAL } from '../styles/responsives.ts';
import { getUserById } from '../services/api/users.ts';

const Stack = createNativeStackNavigator<RootStackParamList>();

function AppNavigator() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const onboardingCompleted = useSelector(selectOnboardingCompleted);
  const [loading, setLoading] = useState(true);

  const loadUserFromStorage = async () => {
    try {
      const userData = await AsyncStorage.getItem('user');
      if (userData) {
        const parsedUserData = JSON.parse(userData);
        const userId = parsedUserData.id;

        const userResponse = await getUserById(userId);
        if (userResponse.error) {
          await AsyncStorage.removeItem('user');
        } else {
          dispatch(loadUserData(parsedUserData));
          dispatch(setUserAvatar(userResponse.user.avatar));
        }
      }
    } catch (error) {
      console.error('Failed to load user data from storage:', error);
    } finally {
      setLoading(false);
      await RNBootSplash.hide({ fade: true });
    }
  };

  useEffect(() => {
    loadUserFromStorage();
  }, []);

  if (loading) {
    return null;
  }

  let screen;
  if (isAuthenticated) {
    if (onboardingCompleted) {
      screen = <Stack.Screen name="MainStack" component={MainNavigator} />;
    } else {
      screen = (
        <Stack.Screen
          name="OnboardingStack"
          component={OnboardingNavigator}
          options={{
            contentStyle: { paddingHorizontal: PADDING_HORIZONTAL, paddingTop: PADDING_VERTICAL },
          }}
        />
      );
    }
  } else {
    screen = (
      <Stack.Screen
        name="AuthStack"
        component={AuthNavigator}
        options={{
          contentStyle: { paddingHorizontal: PADDING_HORIZONTAL, paddingTop: PADDING_VERTICAL },
        }}
      />
    );
  }

  return (
    <NavigationContainer theme={darkTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {screen}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
