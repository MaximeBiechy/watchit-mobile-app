import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import SearchBarComponent from '../../components/SearchBar/SearchBarComponent.tsx';
import { HomeNavigationProp } from '../../navigation/RootStackParamList.tsx';
import styles from './styles.ts';
import { getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies } from '../../services/api/movies.ts';
import { SCREEN_WIDTH } from '../../styles/responsives.ts';
import LoaderComponent from '../../components/Loader/LoaderComponent.tsx';

function MovieGrid({ fetchMovies }: { fetchMovies: () => Promise<any> }) {
  const navigation = useNavigation<HomeNavigationProp>();
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchMovies();
      if (!response.error) {
        setMovies(response.movies);
      }
      setLoading(false);
    };

    fetchData();
  }, [fetchMovies]);

  if (loading) {
    return <LoaderComponent />;
  }

  return (
    <FlatList
      data={movies}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Details', { id: item.id, title: item.title })}>
          <Image source={{ uri: item.posterPath }} style={styles.cardGrid} />
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id.toString()}
      numColumns={3}
      showsVerticalScrollIndicator={false}
      columnWrapperStyle={styles.gridContainer}
    />
  );
}

const renderScene = SceneMap({
  upcoming: () => <MovieGrid fetchMovies={getUpcomingMovies} />,
  popular: () => <MovieGrid fetchMovies={getPopularMovies} />,
  topRated: () => <MovieGrid fetchMovies={getTopRatedMovies} />,
});

function HomeScreen() {
  const { t } = useTranslation('home');
  const navigation = useNavigation<HomeNavigationProp>();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'upcoming', title: t('upcoming') },
    { key: 'popular', title: t('popular') },
    { key: 'topRated', title: t('topRated') },
  ]);

  const [moviesNowPlaying, setMoviesNowPlaying] = useState<any[]>([]);

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
    <View style={styles.container}>
      <SearchBarComponent placeholder={t('searchPlaceholder')} onPress={() => navigation.navigate('Search')} />
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>{t('sectionTitle')}</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.functionText}>{t('viewAll')}</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexShrink: 1 }}>
        <FlatList
          data={moviesNowPlaying}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('Details', { id: item.id, title: item.title })}>
              <Image source={{ uri: item.posterPath }} style={styles.card} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          nestedScrollEnabled
        />
      </View>

      <TabView
        onIndexChange={setIndex}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        initialLayout={{ width: SCREEN_WIDTH }}
        renderTabBar={(props: any) => (
          <TabBar
            navigationState={props.navigationState}
            position={props.position}
            jumpTo={props.jumpTo}
            style={styles.tabBar}
            indicatorStyle={styles.indicator}
            renderTabBarItem={({ route }) => (
              <TouchableOpacity style={styles.tabStyle} onPress={() => props.jumpTo(route.key)}>
                <Text style={styles.tabText}>{route.title}</Text>
              </TouchableOpacity>
            )}
            layout={{
              width: 0,
              height: 0,
            }}
          />
        )}
      />
    </View>
  );
}

export default HomeScreen;
