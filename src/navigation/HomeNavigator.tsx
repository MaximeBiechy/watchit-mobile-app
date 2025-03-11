import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import { HomeStackParamList } from './RootStackParamList.tsx';
import { DetailsScreen, HomeScreen, SearchScreen } from '../screens/index.ts';
import { renderHeader } from '../components/Header/HeaderComponent.tsx';
import { selectUserData } from '../store/user/userSlice.ts';
import { PADDING_HORIZONTAL, PADDING_VERTICAL } from '../styles/responsives.ts';
import { animation, animationDuration } from '../styles/transitionScreens.ts';
import assets from '../assets/assets.ts';
import useWatchlist from '../hooks/useWatchList.ts';
import useSeenList from '../hooks/useSeenList.ts';

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

function HomeNavigator() {
  const { t } = useTranslation();
  const user = useSelector(selectUserData);
  const { watchlist, toggleWatchlist } = useWatchlist();
  const { seenList } = useSeenList();

  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        animation,
        animationDuration,
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          header: () => renderHeader(`${t('home:hello')} ${user.username}`, navigation, false),
          contentStyle: { paddingHorizontal: PADDING_HORIZONTAL, paddingTop: PADDING_VERTICAL },
        })}
      />
      <HomeStack.Screen
        name="Details"
        component={DetailsScreen}
        options={({ route, navigation }) => {
          const { mediaId, mediaTitle, mediaType } = route.params;
          const isFavorite = watchlist.some((item) => item.mediaId === mediaId && item.type === mediaType);
          const icon = isFavorite ? assets.icons.listFull : assets.icons.list;

          return {
            header: () => renderHeader(mediaTitle, navigation, true, icon, () => toggleWatchlist(mediaId, mediaType)),
          };
        }}
        initialParams={{ watchlist, toggleWatchlist }}
      />
      <HomeStack.Screen
        name="Search"
        component={SearchScreen}
        options={({ navigation }) => ({
          header: () => renderHeader(`${t('search:screenTitle')}`, navigation, true),
          contentStyle: { paddingHorizontal: PADDING_HORIZONTAL, paddingTop: PADDING_VERTICAL },
        })}
      />
    </HomeStack.Navigator>
  );
}

export default HomeNavigator;
