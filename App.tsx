import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import Toast from 'react-native-toast-message';
import AppNavigator from './src/navigation/AppNavigator.tsx';
import i18n from './src/locales/i18n.ts';
import store from './src/store/index.ts';
import { toastConfig } from './src/utils/toast.tsx';

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        {/* <Provider store={store}> */}
        <I18nextProvider i18n={i18n}>
          <AppNavigator />
          <Toast position="bottom" topOffset={40} visibilityTime={4000} config={toastConfig} />
        </I18nextProvider>
        {/* </Provider> */}
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

export default App;
