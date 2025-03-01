import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AdBannerComponent from '../../components/AdBanner/AdBannerComponent.tsx';
import ButtonComponent from '../../components/Button/ButtonComponent.tsx';
import { HomeNavigationProp } from '../../navigation/RootStackParamList.tsx';

function HomeScreen() {
  const navigation = useNavigation<HomeNavigationProp>();
  return (
    <View>
      <AdBannerComponent />
      <ButtonComponent
        title="test"
        onPress={() => {
          navigation.navigate('Details');
        }}
      />
    </View>
  );
}

export default HomeScreen;
