import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ProfileScreen from 'containers/ProfileScreen';
import ProfileAppSettingsScreen from 'containers/ProfileAppSettingsScreen';
import ProfileWishlistScreen from 'containers/ProfileWishlistScreen';

import { gStyle } from 'theme';

const ProfileStack = createStackNavigator();

export default function ProfileNavigator() {
  return (
    <ProfileStack.Navigator initialRouteName="Profile" headerMode="none">
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        headerStyle={gStyle.navHeaderStyle}
      />
      <ProfileStack.Screen
        name="ProfileAppSettings"
        component={ProfileAppSettingsScreen}
      />
      <ProfileStack.Screen
        name="ProfileWishlistScreen"
        component={ProfileWishlistScreen}
      />
    </ProfileStack.Navigator>
  );
}
