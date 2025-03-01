import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { BottomTabParamList } from './RootStackParamList.tsx';
import HomeNavigator from './HomeNavigator.tsx';
import MyListNavigator from './MyListNavigator.tsx';
import ProfileNavigator from './ProfileNavigator.tsx';
import { gray, highlightColor, primaryColor } from '../styles/colors.ts';
import assets from '../assets/assets.ts';
import { bodyInfo, FONT_SIZE_22 } from '../styles/typography.ts';

const Tab = createBottomTabNavigator<BottomTabParamList>();

function renderTabBarIcon(icon: string, color: string) {
  return <Icon name={icon} size={FONT_SIZE_22} color={color} />;
}

function TabNavigator() {
  const { t } = useTranslation('bottomTabBar');
  const TabArray: {
    name: keyof BottomTabParamList;
    component: React.ComponentType<any>;
    icon: string;
    label: string;
  }[] = [
    {
      name: 'HomeTab',
      component: HomeNavigator,
      icon: assets.icons.home,
      label: t('home'),
    },
    {
      name: 'MyListsTab',
      component: MyListNavigator,
      icon: assets.icons.list,
      label: t('myLists'),
    },
    {
      name: 'ProfileTab',
      component: ProfileNavigator,
      icon: assets.icons.userProfile,
      label: t('profile'),
    },
  ];

  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: primaryColor,
          borderColor: highlightColor,
          borderTopWidth: 1,
          height: 80,
          paddingTop: 10, // To center the icons vertically (but should do it with another approach)
        },
        tabBarLabelStyle: { ...bodyInfo, marginTop: 5 },
        tabBarActiveTintColor: highlightColor,
        tabBarInactiveTintColor: gray,
      }}
    >
      {TabArray.map((tab) => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
          options={{
            tabBarLabel: tab.label,
            tabBarIcon: ({ color }) => renderTabBarIcon(tab.icon, color),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

export default TabNavigator;
