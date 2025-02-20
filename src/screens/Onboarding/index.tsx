import React, { useRef, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Animated, Dimensions } from 'react-native';
import { useDispatch } from 'react-redux';
import onboardingData from './onBoardingData.ts';
import OnboardingSlide from '../../components/Onboarding/OnboardingSlide.tsx';
import styles from './styles.ts';
import { completeOnboarding } from '../../store/user/userSlice.ts';

function OnboardingScreen() {
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef<FlatList<any>>(null);

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      slidesRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      dispatch(completeOnboarding());
    }
  };

  const handleSkip = () => {
    dispatch(completeOnboarding());
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
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
        {onboardingData.map((item) => (
          <View
            key={item.id}
            style={[styles.dot, { backgroundColor: Number(item.id) === currentIndex ? 'white' : '#FFFFFF33' }]}
          />
        ))}
        <TouchableOpacity onPress={handleNext}>
          <Text style={styles.nextText}>{currentIndex === onboardingData.length - 1 ? 'Finish' : 'Next'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default OnboardingScreen;
