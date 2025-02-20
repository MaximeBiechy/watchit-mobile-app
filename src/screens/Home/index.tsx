import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import AdBannerComponent from '../../components/AdBanner/AdBannerComponent.tsx';
import { selectUserData } from '../../store/user/userSlice.ts';
import ButtonComponent from '../../components/Button/ButtonComponent.tsx';
import { MainNavigationProp } from '../../navigation/RootStackParamList.tsx';

function HomeScreen() {
  const user = useSelector(selectUserData);
  const navigation = useNavigation<MainNavigationProp>();
  console.log(user);
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
