import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles.ts';

interface OnboardingSlideProps {
  item: {
    title: string;
    description: string;
    image: any;
  };
}

function OnboardingSlide({ item }: OnboardingSlideProps) {
  return (
    <View style={styles.container}>
      <Image source={item.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
}

export default OnboardingSlide;
