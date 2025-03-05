import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { Actor } from '../../types/entities.ts';
import styles from './styles.ts';
import { SCREEN_WIDTH } from '../../styles/responsives.ts';
import assets from '../../assets/assets.ts';

interface CastListProps {
  cast?: Actor[];
  imageWidthRatio?: number;
}

function CastListComponent({ cast, imageWidthRatio = 3 }: CastListProps) {
  const renderCast = ({ item }: { item: Actor }) => (
    <TouchableOpacity onPress={() => {}} style={styles.cast}>
      <Image
        source={item.profilePath ? { uri: item.profilePath } : assets.images.defaultActor}
        style={[styles.castImage, { maxWidth: SCREEN_WIDTH / imageWidthRatio, width: SCREEN_WIDTH / imageWidthRatio }]}
      />
      <Text style={[styles.castName, { maxWidth: SCREEN_WIDTH / imageWidthRatio }]}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={cast}
      renderItem={renderCast}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
}

export default CastListComponent;
