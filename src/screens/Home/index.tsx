import React, { useEffect, useRef, useState } from 'react';
import { FlatList, Image, RefreshControl, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import SearchBarComponent from '../../components/SearchBar/SearchBarComponent.tsx';
import { HomeNavigationProp } from '../../navigation/RootStackParamList.tsx';
import styles from './styles.ts';
import { getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies } from '../../services/api/movies.ts';
import { SCREEN_WIDTH } from '../../styles/responsives.ts';
import LoaderComponent from '../../components/Loader/LoaderComponent.tsx';
import { highlightColor } from '../../styles/colors.ts';
import i18n from '../../locales/i18n.ts';
import assets from '../../assets/assets.ts';

function MovieGrid({ fetchMovies }: { fetchMovies: () => Promise<any> }) {
  const navigation = useNavigation<HomeNavigationProp>();
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const response = await fetchMovies();
    if (!response.error) {
      setMovies(response.movies);
    }
    setLoading(false);
    setRefreshing(false);
  };

  useEffect(() => {
    fetchData();
  }, [fetchMovies]);

  const handleRefresh = () => {
    setRefreshing(true);
    fetchData();
  };

  if (loading && !refreshing) {
    return <LoaderComponent />;
  }

  return (
    <FlatList
      data={movies}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Details', {
              mediaId: item.id,
              mediaTitle: item.title,
              mediaType: 'movie',
            })
          }
        >
          <Image source={item.posterPath ? { uri: item.posterPath } : assets.images.defaultMovie} style={styles.cardGrid} />
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id.toString()}
      numColumns={3}
      showsVerticalScrollIndicator={false}
      columnWrapperStyle={styles.gridContainer}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} colors={[highlightColor]} />}
    />
  );
}

function UpcomingMovies() {
  return <MovieGrid fetchMovies={getUpcomingMovies} />;
}

function PopularMovies() {
  return <MovieGrid fetchMovies={getPopularMovies} />;
}

function TopRatedMovies() {
  return <MovieGrid fetchMovies={getTopRatedMovies} />;
}

const renderScene = SceneMap({
  upcoming: UpcomingMovies,
  popular: PopularMovies,
  topRated: TopRatedMovies,
});

function HomeScreen() {
  const { t } = useTranslation('home');
  const navigation = useNavigation<HomeNavigationProp>();
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [routes, setRoutes] = useState([
    { key: 'upcoming', title: t('upcoming') },
    { key: 'popular', title: t('popular') },
    { key: 'topRated', title: t('topRated') },
  ]);

  const [moviesNowPlaying, setMoviesNowPlaying] = useState<any[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const flatListRef = useRef<FlatList>(null);

  const fetchMoviesNowPlaying = async () => {
    setLoading(true);
    const response = await getNowPlayingMovies();
    if (!response.error) {
      setMoviesNowPlaying(response.movies);
    }
    setLoading(false);
    setRefreshing(false);
  };

  useEffect(() => {
    fetchMoviesNowPlaying();
  }, []);

  // ? This is a workaround to update the tab titles when the language changes.
  useEffect(() => {
    setRoutes([
      { key: 'upcoming', title: t('upcoming') },
      { key: 'popular', title: t('popular') },
      { key: 'topRated', title: t('topRated') },
    ]);
  }, [i18n.language]);

  const handleRefresh = () => {
    setRefreshing(true);
    fetchMoviesNowPlaying();
    flatListRef.current?.scrollToOffset({ animated: true, offset: 0 });
  };

  if (loading && !refreshing) {
    return <LoaderComponent />;
  }

  return (
    <View style={styles.container}>
      <SearchBarComponent placeholder={t('searchPlaceholder')} onPress={() => navigation.navigate('Search')} />
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>{t('sectionTitle')}</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.functionText}>{t('viewAll')}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardContainer}>
        <FlatList
          ref={flatListRef}
          data={moviesNowPlaying}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Details', {
                  mediaId: item.id,
                  mediaTitle: item.title,
                  mediaType: 'movie',
                });
              }}
            >
              <Image source={item.posterPath ? { uri: item.posterPath } : assets.images.defaultMovie} style={styles.cardGrid} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.gridContainer}
          nestedScrollEnabled
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} colors={[highlightColor]} />}
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
            contentContainerStyle={styles.tabBarContentContainer}
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
