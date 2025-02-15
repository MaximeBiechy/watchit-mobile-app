import React, { useState } from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { showToast } from '../utils/toast.tsx';
import AdBanner from '../components/AdBanner/AdBanner.tsx';
import { register } from '../services/api/auth.ts';

function HomeScreen() {
  const { t } = useTranslation();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const newUser = await register(username, email, password);
      if (newUser && newUser.username) {
        Alert.alert('Success', `${newUser.username} has been created successfully!`);
      } else {
        throw new Error('User registration failed!');
      }
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View>
      <Text>{t('welcome')}</Text>
      <Button title="Succès" onPress={() => showToast('success', 'Action réussie ! 🎉')} />
      <Button title="Erreur" onPress={() => showToast('error', 'Une erreur est survenue ❌')} />
      <Button title="Info" onPress={() => showToast('info', 'Voici une info importante ℹ️')} />
      <AdBanner />
      <View style={{ backgroundColor: 'green', padding: 10 }}>
        <TextInput placeholder="Nom d'utilisateur" value={username} onChangeText={setUsername} />
        <TextInput placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
        <TextInput placeholder="Mot de passe" value={password} onChangeText={setPassword} secureTextEntry />
        <Button title="S'inscrire" onPress={handleRegister} />
      </View>
    </View>
  );
}

export default HomeScreen;
