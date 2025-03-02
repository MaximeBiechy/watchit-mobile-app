import React from 'react';
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import SearchBarComponent from '../../components/SearchBar/SearchBarComponent.tsx';
import { HomeNavigationProp } from '../../navigation/RootStackParamList.tsx';
import styles from './styles.ts';
import assets from '../../assets/assets.ts';

function HomeScreen() {
  const { t } = useTranslation('home');
  const navigation = useNavigation<HomeNavigationProp>();

  const data = [
    { id: 1, title: 'Movie 1', image: assets.images.spiderman },
    { id: 2, title: 'Movie 2', image: assets.images.spiderman },
    { id: 3, title: 'Movie 3', image: assets.images.spiderman },
    { id: 4, title: 'Movie 4', image: assets.images.spiderman },
    { id: 5, title: 'Movie 5', image: assets.images.spiderman },
    { id: 6, title: 'Movie 6', image: assets.images.spiderman },
    { id: 7, title: 'Movie 7', image: assets.images.spiderman },
    { id: 8, title: 'Movie 8', image: assets.images.spiderman },
    { id: 9, title: 'Movie 9', image: assets.images.spiderman },
    { id: 10, title: 'Movie 10', image: assets.images.spiderman },
  ];

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SearchBarComponent placeholder="Click here to search for a movie, etc" onPress={() => navigation.navigate('Details')} />
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>{t('sectionTitle')}</Text>
        <Text style={[styles.functionText]}>{t('viewAll')}</Text>
      </View>
      <View style={styles.cardContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => {}}>
              <Image source={item.image} style={styles.card} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View>
        <Text>Tab Bar (to be implemented)</Text>
      </View>
      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => {}}>
              <Image source={item.image} style={styles.cardGrid} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
          numColumns={3}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.gridContainer}
          columnWrapperStyle={styles.gridContainer}
        />
      </View>
    </ScrollView>
  );
}

export default HomeScreen;
