import { Text, Image, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles.ts';
import assets from '../../assets/assets.ts';
import { FONT_SIZE_12 } from '../../styles/typography.ts';
import { accentColor } from '../../styles/colors.ts';
import { formatVoteAverage } from '../../utils/number.ts';
import { formatDateTimeOnlyYear } from '../../utils/dateTime.ts';

interface MovieCardSearchProps {
  title: string;
  posterPath: string | null;
  duration: number;
  releaseDate: string;
  genres: string[];
  voteAverage: number;
  onPress: () => void;
}

function MovieCardSearchComponent({
  title,
  posterPath,
  duration,
  releaseDate,
  genres,
  voteAverage,
  onPress,
}: MovieCardSearchProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={{ uri: posterPath !== null ? posterPath : assets.images.defaultMovie }} style={styles.poster} />
      <View style={styles.infosContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <View style={styles.voteContainer}>
            <Icon name={assets.icons.star} size={FONT_SIZE_12} color={accentColor} />
            <Text style={styles.voteAverage}>{formatVoteAverage(voteAverage)}</Text>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <Icon name={assets.icons.time} size={FONT_SIZE_12} color="white" />
          <Text style={styles.textContent}>{duration} min</Text>
        </View>
        <View style={styles.contentContainer}>
          <Icon name={assets.icons.calendar} size={FONT_SIZE_12} color="white" />
          <Text style={styles.textContent}>{formatDateTimeOnlyYear(releaseDate)}</Text>
        </View>
        <View style={styles.contentContainer}>
          <Icon name={assets.icons.ticket} size={FONT_SIZE_12} color="white" />
          <Text style={styles.textContent}>{genres[0]}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default MovieCardSearchComponent;
