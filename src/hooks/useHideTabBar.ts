import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import tabBarStyles from '../navigation/TabBarStyles.ts';

const useHideTabBar = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.getParent()?.setOptions({ tabBarStyle: { display: 'none' } });

    return () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: tabBarStyles.default,
      });
    };
  }, [navigation]);
};

export default useHideTabBar;
