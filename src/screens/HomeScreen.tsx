import React from 'react';
import { Button, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { showToast } from '../utils/toast.tsx';

function HomeScreen() {
  const { t } = useTranslation();
  return (
    <View>
      <Text>{t('welcome')}</Text>
      <Button title="Succès" onPress={() => showToast('success', 'Action réussie ! 🎉')} />
      <Button title="Erreur" onPress={() => showToast('error', 'Une erreur est survenue ❌')} />
      <Button title="Info" onPress={() => showToast('info', 'Voici une info importante ℹ️')} />
    </View>
  );
}

export default HomeScreen;
