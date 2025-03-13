import { FlatList, Image, ImageBackground, Linking, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRoute, RouteProp } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { HomeStackParamList } from '../../navigation/RootStackParamList.tsx';
import { getMovieDetails, getMovieTrailer } from '../../services/api/movies.ts';
import styles from './styles.ts';
import assets from '../../assets/assets.ts';
import { FONT_SIZE_12, FONT_SIZE_16 } from '../../styles/typography.ts';
import { accentColor, gray, primaryColor } from '../../styles/colors.ts';
import LoaderComponent from '../../components/Loader/LoaderComponent.tsx';
import ErrorComponent from '../../components/Error/ErrorComponent.tsx';
import CastListComponent from '../../components/CastList/CastListComponent.tsx';
import { MovieDetails } from '../../types/entities.ts';
import { formatVoteAverage } from '../../utils/number.ts';
import { formatDateTimeOnlyYear } from '../../utils/dateTime.ts';
import { selectUserData } from '../../store/user/userSlice.ts';
import useLists from '../../hooks/useLists.ts';
import { selectSeenList } from '../../store/lists/listsSlice.ts';
import SelectRatingComponent from '../../components/SelectRating/SelectRatingComponent.tsx';
import { rateMedia, updateMediaRating } from '../../services/api/users.ts';

type DetailsScreenRouteProp = RouteProp<HomeStackParamList, 'Details'>;

function DetailsScreen() {
  const route = useRoute<DetailsScreenRouteProp>();
  const { mediaId } = route.params;
  const { t } = useTranslation('details');
  const [movieDetails, setMoviesDetails] = useState<MovieDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const user = useSelector(selectUserData);
  const seenList = useSelector(selectSeenList);
  const { addToSeenList, removeFromSeenList, removeFromWatchlist } = useLists(user.id!);
  const [isRatingModalVisible, setRatingModalVisible] = useState(false);
  const [userRating, setUserRating] = useState<number | null>(null);

  const isInSeenList = seenList.some((item) => item.mediaId === mediaId);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await getMovieDetails(mediaId);
      if (!response.error) {
        setMoviesDetails(response.movie);
      } else {
        setError(response.error);
      }
      setLoading(false);
    };

    const fetchUserRating = async () => {
      const rating = seenList.find((item) => item.mediaId === mediaId)?.rating;
      setUserRating(rating || null);
    };

    fetchMovieDetails();
    fetchUserRating();
  }, [user?.id]);

  if (loading) {
    return <LoaderComponent />;
  }

  const handleRatingPress = () => {
    setRatingModalVisible(true);
  };

  const handleSelectRating = async (note: number) => {
    if (userRating === null) {
      await rateMedia(user.id!, mediaId, 'movie', note);
    } else {
      await updateMediaRating(user.id!, mediaId, 'movie', note);
    }
    await removeFromWatchlist(mediaId, 'movie');
    await addToSeenList({ mediaId, mediaType: 'movie', mediaTitle: movieDetails?.title || '', rating: note });
    setUserRating(note);
  };

  const handleTrailerPress = async () => {
    const response = await getMovieTrailer(mediaId);
    console.log(response);
    if (!response.error) {
      const trailerUrl = response.trailer;
      Linking.openURL(trailerUrl);
    }
  };

  if (error) {
    return (
      <ErrorComponent
        error={error}
        imageSource={assets.images.error}
        additionalText="An error occurred while fetching movie details."
      />
    );
  }

  // ? This function is used to filter unique providers and sort them alphabetically
  const filterUniqueProviders = (providers: string[]) => {
    const uniqueProviders = new Set<string>();
    return providers.filter((provider) => {
      const baseProvider = provider.split(/[ +]/)[0];
      if (!uniqueProviders.has(baseProvider)) {
        uniqueProviders.add(baseProvider);
        return true;
      }
      return false;
    });
  };

  const sortedStreamingProviders = filterUniqueProviders(movieDetails?.streamingProviders || []).sort((a, b) =>
    a.localeCompare(b),
  );

  const handleSeenListToggle = async () => {
    if (isInSeenList) {
      await removeFromSeenList({ mediaId, mediaType: 'movie', mediaTitle: movieDetails?.title || '' });
    } else {
      await addToSeenList({ mediaId, mediaType: 'movie', mediaTitle: movieDetails?.title || '' });
      await removeFromWatchlist(mediaId, 'movie');
    }
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <ImageBackground source={{ uri: movieDetails?.backDropPath || movieDetails?.posterPath }} style={styles.mainInfos}>
        <LinearGradient
          colors={['rgba(31,29,43,0.2)', 'rgba(38,46,63,0.62)', primaryColor]}
          locations={[0, 0, 1]}
          style={styles.overlay}
        />
        <Image source={{ uri: movieDetails?.posterPath }} style={styles.poster} />
        <View style={styles.infosContainer}>
          <View style={styles.info}>
            <Icon name={assets.icons.calendar} size={FONT_SIZE_12} color={gray} />
            <Text style={styles.textInfo}>{formatDateTimeOnlyYear(movieDetails?.releaseDate)}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.info}>
            <Icon name={assets.icons.time} size={FONT_SIZE_12} color={gray} />
            <Text style={styles.textInfo}>
              {movieDetails?.duration} {t('minutes')}
            </Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.info}>
            <Icon name={assets.icons.ticket} size={FONT_SIZE_12} color={gray} />
            <Text style={styles.textInfo}>{movieDetails?.genres[0]}</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.trailerButton} onPress={handleTrailerPress}>
            <Icon name={assets.icons.play} size={FONT_SIZE_16} color="white" />
            <Text style={styles.textButton}>{t('trailerButton')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.seenButton} onPress={handleSeenListToggle}>
            <Icon name={isInSeenList ? assets.icons.eye : assets.icons.eyeOff} size={FONT_SIZE_16} color={accentColor} />
          </TouchableOpacity>
        </View>
        <Text style={styles.directorContent}>
          {t('director')}: {movieDetails?.director}
        </Text>
      </ImageBackground>
      <View style={styles.secondPartContainer}>
        <Text style={styles.sectionTitle}>{t('opinions')}</Text>
        <View style={styles.opinionContainer}>
          <TouchableOpacity onPress={handleRatingPress} style={styles.scoreAction}>
            <View style={styles.scoreContainer}>
              <Text style={styles.score}>{formatVoteAverage(userRating)}/10</Text>
              <Text style={styles.who}>{t('yours')}</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.divider} />
          <View style={styles.scoreContainer}>
            <Text style={styles.score}>8.0/10</Text>
            <Text style={styles.who}>Watch It</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.scoreContainer}>
            <Text style={styles.score}>{formatVoteAverage(movieDetails?.voteAverage)}/10</Text>
            <Text style={styles.who}>IMDB</Text>
          </View>
        </View>
        <FlatList
          style={styles.streamingWatcherContainer}
          data={sortedStreamingProviders}
          keyExtractor={(provider) => provider}
          horizontal
          renderItem={({ item: provider }) => {
            let imageSource;
            switch (true) {
              case provider.includes('Netflix'):
                imageSource = assets.images.WatchProviders.netflix;
                break;
              case provider.includes('Prime'):
                imageSource = assets.images.WatchProviders.prime;
                break;
              case provider.includes('Disney'):
                imageSource = assets.images.WatchProviders.disneyPlus;
                break;
              case provider.includes('Apple'):
                imageSource = assets.images.WatchProviders.appleTv;
                break;
              case provider.includes('Max'):
                imageSource = assets.images.WatchProviders.max;
                break;
              case provider.includes('Paramount'):
                imageSource = assets.images.WatchProviders.paramount;
                break;
              case provider.includes('Canal'):
                imageSource = assets.images.WatchProviders.canal;
                break;
              default:
                return null;
            }
            return (
              <TouchableOpacity onPress={() => {}}>
                <Image source={imageSource} style={styles.streamingProvider} />
              </TouchableOpacity>
            );
          }}
          showsHorizontalScrollIndicator={false}
        />
        <View style={styles.descriptionContainer}>
          <Text style={styles.sectionTitle}>{t('description')}</Text>
          <Text style={styles.descriptionText}>
            {movieDetails?.overview !== '' ? movieDetails?.overview : t('noDescription')}
          </Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>{t('cast')}</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={[styles.functionText]}>{t('viewAll')}</Text>
          </TouchableOpacity>
        </View>
        <CastListComponent cast={movieDetails?.actors} imageWidthRatio={3} />
        {/* TODO: Implement Comments Section */}
        {/* <Text style={styles.sectionTitle}>{t('comments')}</Text> */}
      </View>
      <SelectRatingComponent
        visible={isRatingModalVisible}
        onClose={() => setRatingModalVisible(false)}
        onSelectRating={handleSelectRating}
      />
    </ScrollView>
  );
}

export default DetailsScreen;
