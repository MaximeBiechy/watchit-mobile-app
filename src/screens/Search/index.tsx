import { View } from 'react-native';
import React from 'react';
import SearchBarComponent from '../../components/SearchBar/SearchBarComponent.tsx';
import assets from '../../assets/assets.ts';
import useHideTabBar from '../../hooks/useHideTabBar.ts';

function SearchScreen() {
  useHideTabBar();

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
