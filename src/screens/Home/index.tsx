import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import SearchBarComponent from '../../components/SearchBar/SearchBarComponent.tsx';
import { HomeNavigationProp } from '../../navigation/RootStackParamList.tsx';
import styles from './styles.ts';
import { getNowPlayingMovies } from '../../services/api/movies.ts';

function HomeScreen() {
  const { t } = useTranslation('home');
  const navigation = useNavigation<HomeNavigationProp>();
  const [moviesNowPlaying, setMoviesNowPlaying] = useState([]);

  useEffect(() => {
    const fetchMoviesNowPlaying = async () => {
      const response = await getNowPlayingMovies();
      if (!response.error) {
        setMoviesNowPlaying(response.movies);
      }
    };
    fetchMoviesNowPlaying();
  }, []);

  return (
    <View>
      <SearchBarComponent placeholder="Click here to search for a movie, etc" onPress={() => navigation.navigate('Search')} />
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>{t('sectionTitle')}</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={[styles.functionText]}>{t('viewAll')}</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={moviesNowPlaying}
        renderItem={({ item }: any) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Details', { id: item.id, title: item.title });
            }}
          >
            <Image source={{ uri: item.posterPath }} style={styles.card} />
          </TouchableOpacity>
        )}
        keyExtractor={(item: any) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <View>
        <Text style={{ color: 'white' }}>Tab Bar (to be implemented)</Text>
      </View>
    </View>
  );
}

export default HomeScreen;
