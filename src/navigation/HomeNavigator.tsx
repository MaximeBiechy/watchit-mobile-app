import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { HomeStackParamList } from './RootStackParamList.tsx';
import { DetailsScreen, HomeScreen, SearchScreen } from '../screens/index.ts';
import { renderHeader } from '../components/Header/HeaderComponent.tsx';
import { selectUserData } from '../store/user/userSlice.ts';
import { PADDING_HORIZONTAL, PADDING_VERTICAL } from '../styles/responsives.ts';
import { animation, animationDuration } from '../styles/transitionScreens.ts';
import assets from '../assets/assets.ts';

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

function HomeNavigator() {
  const { t } = useTranslation();
  const user = useSelector(selectUserData);

  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        contentStyle: { paddingHorizontal: PADDING_HORIZONTAL, paddingTop: PADDING_VERTICAL },
        animation, // ? Avoid flickering effect when navigating between screens
        animationDuration, // ? It doesn't seem to work
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          header: () => renderHeader(`${t('home:hello')} ${user.username}`, navigation, false),
        })}
      />
      <HomeStack.Screen
        name="Details"
        component={DetailsScreen}
        options={({ route, navigation }) => {
          const isFavorite = false; // ? Implement a function to check if the movie is in the user's list
          const icon = isFavorite ? assets.icons.listFull : assets.icons.list;

          return {
            header: () =>
              renderHeader(route.params.title, navigation, true, icon, () => {
                //   TODO: Implement a function to add the movie to the user's list
                // It has to change the icon to a checkmark and add the movie to the user's list
              }),
          };
        }}
      />
      <HomeStack.Screen
        name="Search"
        component={SearchScreen}
        options={({ navigation }) => ({
          header: () => renderHeader(`${t('search:screenTitle')}`, navigation, true),
        })}
      />
    </HomeStack.Navigator>
  );
}

export default HomeNavigator;
