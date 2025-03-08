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
import { addToWatchlist, getUserWatchlist, removeFromWatchlist } from '../services/api/users.ts';
import { WatchlistItem } from '../types/entities.ts';

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

function HomeNavigator() {
  const { t } = useTranslation();
  const user = useSelector(selectUserData);
  const [watchlist, setWatchlist] = useState<WatchlistItem[]>([]);

  useEffect(() => {
    if (user?.id) {
      getUserWatchlist(user.id).then((data) => {
        if (data && !data.error) {
          setWatchlist(
            data.watchlist.map((item: { mediaId: number; type: string }) => ({
              mediaId: item.mediaId,
              type: item.type,
            })),
          );
        }
      });
    }
  }, [user?.id]);

  const toggleWatchlist = async (mediaId: number, type: string) => {
    if (!user?.id) return;

    const isInWatchlist = watchlist.some((item) => item.mediaId === mediaId && item.type === type);
    if (isInWatchlist) {
      await removeFromWatchlist(user.id, mediaId, type);
      setWatchlist(watchlist.filter((item) => item.mediaId !== mediaId || item.type !== type));
    } else {
      await addToWatchlist(user.id, mediaId, type);
      setWatchlist([...watchlist, { mediaId, type }]);
    }
  };

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
          const { id, title, mediaType } = route.params;
          const isFavorite = watchlist.some((item) => item.mediaId === id && item.type === mediaType);
          const icon = isFavorite ? assets.icons.listFull : assets.icons.list;

          return {
            header: () => renderHeader(title, navigation, true, icon, () => toggleWatchlist(id, mediaType)),
          };
        }}
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
