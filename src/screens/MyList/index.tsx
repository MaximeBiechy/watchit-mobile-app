import { useTranslation } from 'react-i18next';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FlatList, RefreshControl, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { MyListNavigationProp } from '../../navigation/RootStackParamList.tsx';
import LoaderComponent from '../../components/Loader/LoaderComponent.tsx';
import { getUserSeenMedia, getUserWatchlist } from '../../services/api/users.ts';
import { selectUserData } from '../../store/user/userSlice.ts';
import styles from './styles.ts';
import MovieCardSearchComponent from '../../components/MovieCardSearch/MovieCardSearchComponent.tsx';
import { PADDING_HORIZONTAL, SCREEN_WIDTH } from '../../styles/responsives.ts';
import { highlightColor } from '../../styles/colors.ts';
import i18n from '../../locales/i18n.ts';
import { getMovieDetails } from '../../services/api/movies.ts';

function List({ fetchMovies }: { fetchMovies: () => Promise<any> }) {
  const navigation = useNavigation<MyListNavigationProp>();
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const flatListRef = useRef<FlatList>(null);

  const fetchData = async () => {
    setLoading(true);
    const response = await fetchMovies();
    if (!response.error) {
      const res = response.watchlist ? 'watchlist' : 'seenMedia';
      let detailedMovies;
      if (res === 'watchlist') {
        detailedMovies = await Promise.all(
          response.watchlist.map(async (item: any) => {
            const movieDetails = await getMovieDetails(item.mediaId);
            return { ...item, ...movieDetails.movie };
          }),
        );
      } else {
        detailedMovies = await Promise.all(
          response.seenMedia.map(async (item: any) => {
            const movieDetails = await getMovieDetails(item.mediaId);
            return { ...item, ...movieDetails.movie };
          }),
        );
      }
      setMovies(detailedMovies);
    }
    setLoading(false);
    setRefreshing(false);
  };

  useEffect(() => {
    fetchData();
  }, [fetchMovies]);

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, []),
  );

  const handleRefresh = () => {
    setRefreshing(true);
    fetchData();
    flatListRef.current?.scrollToOffset({ animated: true, offset: 0 });
  };

  if (loading && !refreshing) {
    return <LoaderComponent />;
  }

  return (
    <FlatList
      ref={flatListRef}
      data={movies}
      renderItem={({ item }) => (
        <MovieCardSearchComponent
          title={item.title}
          posterPath={item.posterPath}
          duration={item.duration}
          releaseDate={item.releaseDate}
          genres={item.genres}
          voteAverage={item.voteAverage}
          onPress={() => {
            navigation.navigate('Details', { mediaId: item.id, mediaTitle: item.title, mediaType: 'movie' });
          }}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.flatListContainer}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={{ height: PADDING_HORIZONTAL }} />}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} colors={[highlightColor]} />}
    />
  );
}

function Watchlist() {
  const user = useSelector(selectUserData);
  return <List fetchMovies={() => getUserWatchlist(user.id!)} />;
}

function Seen() {
  const user = useSelector(selectUserData);
  return <List fetchMovies={() => getUserSeenMedia(user.id!)} />;
}

const renderScene = SceneMap({
  watchlist: Watchlist,
  seen: Seen,
});

function MyList() {
  const { t } = useTranslation('list');
  const [index, setIndex] = useState(0);
  const [routes, setRoutes] = useState([
    { key: 'watchlist', title: t('watchlist') },
    { key: 'seen', title: t('seen') },
  ]);

  useEffect(() => {
    setRoutes([
      { key: 'watchlist', title: t('watchlist') },
      { key: 'seen', title: t('seen') },
    ]);
  }, [i18n.language]);

  return (
    <View style={styles.container}>
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
            indicatorContainerStyle={styles.indicatorContainer}
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

export default MyList;
