import { View } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import SearchBarComponent from '../../components/SearchBar/SearchBarComponent.tsx';
import assets from '../../assets/assets.ts';
import { BottomTabParamList } from '../../navigation/RootStackParamList.tsx';
import tabBarStyles from '../../navigation/TabBarStyles.ts';

function SearchScreen() {
  const navigation = useNavigation<BottomTabNavigationProp<BottomTabParamList>>();

  useEffect(() => {
    navigation.getParent()?.setOptions({ tabBarStyle: { display: 'none' } });

    return () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: tabBarStyles.default,
      });
    };
  }, [navigation]);

  return (
    <View>
      <SearchBarComponent
        placeholder="Search for a movie, etc"
        autoFocus
        onSearch={(text) => console.log('Recherche:', text)}
        rightIconName={assets.icons.options}
      />
    </View>
  );
}

export default SearchScreen;
