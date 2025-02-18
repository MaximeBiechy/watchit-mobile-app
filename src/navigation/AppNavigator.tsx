import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MainNavigator from './MainNavigator.tsx';
import AuthNavigator from './AuthNavigator.tsx';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // ? Check if the user is already authenticated
    const checkAuthStatus = async () => {
      const userToken = await AsyncStorage.getItem('accessToken');
      setIsAuthenticated(!!userToken);
    };

    checkAuthStatus();
  }, []);

  return (
    <NavigationContainer onReady={() => RNBootSplash.hide({ fade: true })}>
      {/* ? Show the MainStack if the user is authenticated, otherwise show the AuthStack */}
      <Stack.Navigator screenOptions={{ headerShown: false }}>
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
