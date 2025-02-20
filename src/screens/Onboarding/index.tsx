import React, { useRef, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Animated } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import OnboardingSlide from '../../components/Onboarding/OnboardingSlide.tsx';
import styles from './styles.ts';
import assets from '../../assets/assets.ts';
import { OnboardingNavigationProp } from '../../navigation/RootStackParamList.tsx';

function OnboardingScreen() {
  const { t } = useTranslation('onboarding');
  const navigation = useNavigation<OnboardingNavigationProp>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef<FlatList>(null);

  // ? Different onboarding slides
  const onboardingData = [
    {
      id: '1',
      title: t('title1'),
      description: t('description1'),
      image: assets.images.Onboarding.onboarding1,
    },
    {
      id: '2',
      title: t('title2'),
      description: t('description2'),
      image: assets.images.Onboarding.onboarding2,
    },
    {
      id: '3',
      title: t('title3'),
      description: t('description3'),
      image: assets.images.Onboarding.onboarding3,
    },
  ];

  const handleNext = () => {
    // ? If we're not on the last slide, scroll to the next one
    if (currentIndex < onboardingData.length - 1) {
      slidesRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      navigation.navigate('ChooseAvatar');
    }
  };

  const handleSkip = () => {
    navigation.navigate('ChooseAvatar');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={onboardingData}
        renderItem={({ item }) => <OnboardingSlide item={item} />}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false}
        keyExtractor={(item) => item.id}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
        onMomentumScrollEnd={(event) => {
          const index = Math.round(event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width);
          setCurrentIndex(index);
        }}
        ref={slidesRef}
      />

      <View style={styles.pagination}>
        <TouchableOpacity onPress={handleSkip}>
          <Text style={styles.skipText}>{t('skip')}</Text>
        </TouchableOpacity>
        <View style={styles.dotContainer}>
          {onboardingData.map((item, index) => (
            <View key={item.id} style={[styles.dot, { backgroundColor: index === currentIndex ? 'white' : '#FFFFFF33' }]} />
          ))}
        </View>
        <TouchableOpacity onPress={handleNext}>
          <Text style={styles.nextText}>{currentIndex === onboardingData.length - 1 ? t('finish') : t('next')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default OnboardingScreen;
