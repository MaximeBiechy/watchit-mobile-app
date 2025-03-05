import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRoute, RouteProp } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import { useTranslation } from 'react-i18next';
import { HomeStackParamList } from '../../navigation/RootStackParamList.tsx';
import { getMovieDetails } from '../../services/api/movies.ts';
import styles from './styles.ts';
import assets from '../../assets/assets.ts';
import { FONT_SIZE_12, FONT_SIZE_16 } from '../../styles/typography.ts';
import { accentColor, gray, primaryColor } from '../../styles/colors.ts';
import LoaderComponent from '../../components/Loader/LoaderComponent.tsx';
import ErrorComponent from '../../components/Error/ErrorComponent.tsx';
import CastListComponent from '../../components/CastList/CastListComponent.tsx';
import { MovieDetails } from '../../types/entities.ts';

type DetailsScreenRouteProp = RouteProp<HomeStackParamList, 'Details'>;

function DetailsScreen() {
  const route = useRoute<DetailsScreenRouteProp>();
  const { id } = route.params;
  const { t } = useTranslation('details');
  const [movieDetails, setMoviesDetails] = useState<MovieDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await getMovieDetails(id);
      if (!response.error) {
        setMoviesDetails(response.movie);
      } else {
        setError(response.error);
      }
      setLoading(false);
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return <LoaderComponent />;
  }

  if (error) {
    return (
      <ErrorComponent
        error={error}
        imageSource={assets.images.error}
        additionalText="An error occurred while fetching movie details."
      />
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <ImageBackground source={{ uri: movieDetails?.posterPath }} style={styles.mainInfos}>
        <LinearGradient
          colors={['rgba(31,29,43,0.2)', 'rgba(38,46,63,0.62)', primaryColor]}
          locations={[0, 0, 1]}
          style={styles.overlay}
        />
        <Image source={{ uri: movieDetails?.posterPath }} style={styles.poster} />
        <View style={styles.infosContainer}>
          <View style={styles.info}>
            <Icon name={assets.icons.calendar} size={FONT_SIZE_12} color={gray} />
            <Text style={styles.textInfo}>{movieDetails?.releaseDate.split('-')[0]}</Text>
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
          <TouchableOpacity style={styles.trailerButton} onPress={() => {}}>
            <Icon name={assets.icons.play} size={FONT_SIZE_16} color="white" />
            <Text style={styles.textButton}>{t('trailerButton')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.seenButton} onPress={() => {}}>
            <Icon name={assets.icons.eyeOff} size={FONT_SIZE_16} color={accentColor} />
          </TouchableOpacity>
        </View>
        <Text style={styles.directorContent}>
          {t('director')}: {movieDetails?.director}
        </Text>
      </ImageBackground>
      <View style={styles.secondPartContainer}>
        <Text style={styles.sectionTitle}>{t('opinions')}</Text>
        <View style={styles.opinionContainer}>
          <TouchableOpacity onPress={() => {}} style={styles.scoreAction}>
            <View style={styles.scoreContainer}>
              <Text style={styles.score}>8.0/10</Text>
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
            <Text style={styles.score}>{movieDetails?.voteAverage}/10</Text>
            <Text style={styles.who}>IMDB</Text>
          </View>
        </View>
        <View style={styles.streamingWatcherContainer}>
          {movieDetails?.streamingProviders &&
            movieDetails.streamingProviders.length > 0 &&
            movieDetails.streamingProviders.map((provider: string) => {
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
                case provider.includes('HBO'):
                  imageSource = assets.images.WatchProviders.max;
                  break;
                case provider.includes('Paramount'):
                  imageSource = assets.images.WatchProviders.paramount;
                  break;
                default:
                  return null;
              }
              return <Image source={imageSource} style={styles.streamingProvider} />;
            })}
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.sectionTitle}>{t('description')}</Text>
          <Text style={styles.descriptionText}>{movieDetails?.overview}</Text>
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
    </ScrollView>
  );
}

export default DetailsScreen;
