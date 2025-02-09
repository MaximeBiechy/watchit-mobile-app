import React from 'react';
import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';

function HomeScreen() {
  const { t } = useTranslation();
  return (
    <View>
      <Text>{t('welcome')}</Text>
    </View>
  );
}

export default HomeScreen;
