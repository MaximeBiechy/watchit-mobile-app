import React, { useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import SearchBarComponent from '../../components/SearchBar/SearchBarComponent.tsx';
import MovieCardSearchComponent from '../../components/MovieCardSearch/MovieCardSearchComponent.tsx';
import CastListComponent from '../../components/CastList/CastListComponent.tsx';
import assets from '../../assets/assets.ts';
import useHideTabBar from '../../hooks/useHideTabBar.ts';
import styles from './styles.ts';
import { search } from '../../services/api/search.ts';
import { HomeNavigationProp } from '../../navigation/RootStackParamList.tsx';
import { PADDING_HORIZONTAL } from '../../styles/responsives.ts';
import { getMovieDetails } from '../../services/api/movies.ts';

interface SearchResult {
  title: string;
  mediaType: string;
  posterPath: string;
  releaseDate: string;
  voteAverage: number;
  duration: number;
  genres: string[];
  id: number;
  name?: string;
  profilePath?: string;
  character?: string;
}

interface SearchResults {
  results: SearchResult[];
}

const providers = [
  { name: 'Netflix', logo: assets.images.WatchProviders.netflix2 },
  { name: 'Prime', logo: assets.images.WatchProviders.prime2 },
  { name: 'Disney', logo: assets.images.WatchProviders.disneyPlus2 },
  { name: 'Max', logo: assets.images.WatchProviders.max2 },
  { name: 'Canal', logo: assets.images.WatchProviders.canal2 },
  { name: 'Paramount', logo: assets.images.WatchProviders.paramount2 },
  { name: 'Apple', logo: assets.images.WatchProviders.apple2 },
];

function SearchScreen() {
  useHideTabBar();
  const navigation = useNavigation<HomeNavigationProp>();
  const { t } = useTranslation('search');
  const [results, setResults] = useState<SearchResults>({ results: [] });

  const hasActors = results.results.some((item) => item.mediaType === 'actor' && item.name && item.profilePath);

  const handleSearch = async (text: string) => {
    if (text.trim() === '') {
      setResults({ results: [] });
      return;
    }
    const searchResults = await search(text);
    const detailedResults = await Promise.all(
      searchResults.results.map(async (item: any) => {
        if (item.mediaType === 'movie') {
          const movie = await getMovieDetails(item.id);
          return { ...item, ...movie.movie };
        }
        return item;
      }),
    );
    setResults({ results: detailedResults });
  };

  return (
    <FlatList
      ListHeaderComponent={
        <>
          <SearchBarComponent
            placeholder="Search for a movie, etc"
            autoFocus
            onSearch={handleSearch}
            rightIconName={assets.icons.options}
          />
          <FlatList
            data={providers}
            renderItem={({ item }) => <Image source={item.logo} style={styles.providerLogo} />}
            keyExtractor={(item) => item.name}
            contentContainerStyle={styles.providersContainer}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
          {hasActors && <Text style={styles.sectionTitle}>{t('actorsTitle')}</Text>}
          <CastListComponent
            cast={results.results
              .filter((item) => item.mediaType === 'actor' && item.name && item.profilePath)
              .map((item) => ({
                id: item.id,
                name: item.name!,
                character: item.character || '',
                profilePath: item.profilePath!,
              }))}
            imageWidthRatio={5}
          />
          {results.results.length === 0 && <Text style={styles.sectionTitle}>{t('suggestions')}</Text>}
          {results.results.some(
            (item) =>
              item.mediaType === 'movie' &&
              item.title &&
              item.posterPath &&
              item.releaseDate &&
              item.voteAverage &&
              item.genres &&
              item.duration,
          ) && <Text style={styles.sectionTitle}>{hasActors ? t('otherTitle') : t('moviesTitle')}</Text>}
        </>
      }
      data={results.results.filter(
        (item) =>
          item.mediaType === 'movie' &&
          item.title &&
          item.posterPath &&
          item.releaseDate &&
          item.voteAverage &&
          item.genres &&
          item.duration,
      )}
      renderItem={({ item }) => (
        <MovieCardSearchComponent
          title={item.title}
          posterPath={item.posterPath}
          duration={item.duration}
          releaseDate={item.releaseDate}
          genres={item.genres}
          voteAverage={item.voteAverage}
          onPress={() => {
            navigation.navigate('Details', { id: item.id, title: item.title });
          }}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.flatListContainer}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={{ height: PADDING_HORIZONTAL }} />}
    />
  );
}

export default SearchScreen;
