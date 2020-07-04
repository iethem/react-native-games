import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PropTypes from 'prop-types';

import { colors } from 'theme';

import HomeScreen from 'containers/HomeScreen';
import SearchScreen from 'containers/SearchScreen';
import FavoritesScreen from 'containers/FavoritesScreen';
import ProfileIcon from 'components/ProfileIcon';

// icons
import SvgHome from 'images/icons/Svg.Home';
import SvgSearch from 'images/icons/Svg.Search';
import SvgFavorites from 'images/icons/Svg.Favorites';

import ProfileNavigator from './ProfileNavigator';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let Icon;

          if (route.name === 'Home') {
            Icon = SvgHome;
          } else if (route.name === 'Search') {
            Icon = SvgSearch;
          } else if (route.name === 'Favorites') {
            Icon = SvgFavorites;
          } else if (route.name === 'ProfileNavigator') {
            Icon = ProfileIcon;
          }

          return <Icon active={focused} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.white,
        inactiveTintColor: colors.inactiveGrey,
        showLabel: false,
        style: {
          backgroundColor: colors.tabBackground,
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen name="ProfileNavigator" component={ProfileNavigator} />
    </Tab.Navigator>
  );
}

TabNavigator.propTypes = {
//   focused: PropTypes.bool,
};
