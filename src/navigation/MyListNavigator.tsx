import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';
import { MyListStackParamList } from './RootStackParamList.tsx';
import { DetailsScreen, MyListScreen } from '../screens/index.ts';
import { renderHeader } from '../components/Header/HeaderComponent.tsx';
import { PADDING_HORIZONTAL, PADDING_VERTICAL } from '../styles/responsives.ts';
import { animation, animationDuration } from '../styles/transitionScreens.ts';
import { selectUserData } from '../store/user/userSlice.ts';
import { addToWatchlist, removeFromWatchlist, selectSeenList, selectWatchlist } from '../store/lists/listsSlice.ts';
import { MediaItem } from '../types/entities.ts';
import { addToWatchlist as apiAddToWatchlist, removeFromWatchlist as apiRemoveFromWatchlist } from '../services/api/users.ts';
import assets from '../assets/assets.ts';

const MyListStack = createNativeStackNavigator<MyListStackParamList>();

function MyListNavigator() {
  const user = useSelector(selectUserData);
  const watchlist = useSelector(selectWatchlist);
  const seenList = useSelector(selectSeenList);
  const dispatch = useDispatch();

  return (
    <MyListStack.Navigator
      initialRouteName="MyList"
      screenOptions={{
        contentStyle: { paddingHorizontal: PADDING_HORIZONTAL, paddingTop: PADDING_VERTICAL },
        animation, // ? Avoid flickering effect when navigating between screens
        animationDuration, // ? It doesn't seem to work
      }}
    >
      <MyListStack.Screen
        name="MyList"
        component={MyListScreen}
        options={({ navigation }) => ({
          header: () => renderHeader('My List', navigation, false),
        })}
      />
      <MyListStack.Screen
        name="Details"
        component={DetailsScreen}
        options={({ route, navigation }) => {
          const media: MediaItem = {
            mediaId: route.params.mediaId,
            mediaTitle: route.params.mediaTitle,
            mediaType: route.params.mediaType === 'movie' ? 'movie' : 'tv',
          };
          const isInWatchlist = watchlist.some((item) => item.mediaId === media.mediaId);
          const isInSeenList = seenList.some((item) => item.mediaId === media.mediaId);
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
    </MyListStack.Navigator>
  );
}

export default MyListNavigator;
