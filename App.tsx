import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { I18nextProvider } from 'react-i18next';
import AppNavigator from './src/navigation/AppNavigator.tsx';
import i18n from './src/locales/i18n.ts';

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <I18nextProvider i18n={i18n}>
          <AppNavigator />
        </I18nextProvider>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

export default App;
