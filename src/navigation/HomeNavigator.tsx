import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { HomeStackParamList } from './RootStackParamList.tsx';
import { DetailsScreen, HomeScreen } from '../screens/index.ts';
import { renderHeader } from '../components/Header/HeaderComponent.tsx';
import { selectUserData } from '../store/user/userSlice.ts';
import { PADDING_HORIZONTAL, PADDING_VERTICAL } from '../styles/responsives.ts';

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

function HomeNavigator() {
  const { t } = useTranslation();
  const user = useSelector(selectUserData);

  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        contentStyle: { paddingHorizontal: PADDING_HORIZONTAL, paddingTop: PADDING_VERTICAL },
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
        options={({ navigation }) => ({
          header: () => renderHeader('Details', navigation, true),
        })}
      />
    </HomeStack.Navigator>
  );
}

export default HomeNavigator;
