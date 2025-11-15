import { useSelector, useDispatch } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import { HomeStackParamList } from './RootStackParamList.tsx';
import { DetailsScreen, HomeScreen, SearchScreen } from '../screens/index.ts';
import { renderHeader } from '../components/Header/HeaderComponent.tsx';
import { selectUserData } from '../store/user/userSlice.ts';
import { PADDING_HORIZONTAL, PADDING_VERTICAL } from '../styles/responsives.ts';
import { animation, animationDuration } from '../styles/transitionScreens.ts';
import assets from '../assets/assets.ts';
import { selectWatchlist, addToWatchlist, removeFromWatchlist, selectSeenList } from '../store/lists/listsSlice.ts';
import { MediaItem } from '../types/entities.ts';
import { addToWatchlist as apiAddToWatchlist, removeFromWatchlist as apiRemoveFromWatchlist } from '../services/api/users.ts';

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

function HomeNavigator() {
  const { t } = useTranslation();
  const user = useSelector(selectUserData);
  const watchlist = useSelector(selectWatchlist);
  const seenList = useSelector(selectSeenList);
  const dispatch = useDispatch();

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
          const media: MediaItem = {
            mediaId: route.params.mediaId,
            mediaTitle: route.params.mediaTitle,
            mediaType: route.params.mediaType === 'movie' ? 'movie' : 'tv',
          };
          const isInWatchlist = watchlist.some((item) => item?.mediaId === media.mediaId);
          const isInSeenList = seenList.some((item) => item?.mediaId === media.mediaId);
          const toggleWatchlist = async () => {
            if (isInWatchlist) {
              await apiRemoveFromWatchlist(user.id!, media.mediaId, media.mediaType);
              dispatch(removeFromWatchlist({ mediaId: media.mediaId }));
            } else if (!isInSeenList) {
              await apiAddToWatchlist(user.id!, media.mediaId, media.mediaType);
              dispatch(addToWatchlist(media));
            }
          };

          const icon = isInWatchlist ? assets.icons.listFull : assets.icons.list;

          return {
            header: () => renderHeader(media.mediaTitle, navigation, true, icon, toggleWatchlist),
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
