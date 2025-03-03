import { Text, View } from 'react-native';
import React from 'react';
import { useRoute, RouteProp } from '@react-navigation/native';
import { HomeStackParamList } from '../../navigation/RootStackParamList.tsx';

type DetailsScreenRouteProp = RouteProp<HomeStackParamList, 'Details'>;

function DetailsScreen() {
  const route = useRoute<DetailsScreenRouteProp>();
  const { id } = route.params;

  return (
    <View>
      <Text>id: {id}</Text>
    </View>
  );
}

export default DetailsScreen;
