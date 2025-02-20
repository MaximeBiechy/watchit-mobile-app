import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';
import { useSelector } from 'react-redux';
import MainNavigator from './MainNavigator.tsx';
import AuthNavigator from './AuthNavigator.tsx';
import darkTheme from '../styles/themes.ts';
import { RootStackParamList } from './RootStackParamList.tsx';
import { selectIsAuthenticated } from '../store/user/userSlice.ts';

const Stack = createNativeStackNavigator<RootStackParamList>();

function AppNavigator() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  console.log(isAuthenticated);

  return (
    <NavigationContainer onReady={() => RNBootSplash.hide({ fade: true })} theme={darkTheme}>
      {/* ? Show the MainStack if the user is authenticated, otherwise show the AuthStack */}
      <Stack.Navigator screenOptions={{ headerShown: false, contentStyle: { paddingHorizontal: 16, paddingTop: 8 } }}>
        {isAuthenticated ? (
          <Stack.Screen name="MainStack" component={MainNavigator} />
        ) : (
          <Stack.Screen name="AuthStack" component={AuthNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
