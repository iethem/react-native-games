/**
 *
 * App
 *
 * https//github.com/iethem/react-native-boilerplate
 */

import React, { memo } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import LoginScreen from 'containers/LoginScreen';
import RegisterScreen from 'containers/RegisterScreen';
import GameDetailsScreen from 'containers/GameDetailsScreen';
import ModalAddProfileScreen from 'containers/ModalAddProfileScreen';
import ModalManageProfilesScreen from 'containers/ModalManageProfilesScreen';
import ModalVideoScreen from 'containers/ModalVideoScreen';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import makeSelectApp, { makeSelectActiveUser } from './selectors';

import TabNavigator from './TabNavigator';

// console.disableYellowBox = true;

const Stack = createStackNavigator();

export function App({ activeUser }) {
  useInjectReducer({ key: 'app', reducer });
  useInjectSaga({ key: 'app', saga });

  return (
    <>
      <StatusBar barStyle="light-content" />

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" headerMode="none">
          {activeUser ? (
            <>
              <Stack.Screen name="Main" component={TabNavigator} />
              <Stack.Screen name="GameDetails" component={GameDetailsScreen} />
              <Stack.Screen
                name="ModalAddProfile"
                component={ModalAddProfileScreen}
                options={{
                  gestureEnabled: false,
                }}
              />
              <Stack.Screen
                name="ModalManageProfiles"
                component={ModalManageProfilesScreen}
                options={{
                  gestureEnabled: false,
                }}
              />
              <Stack.Screen
                name="ModalVideo"
                component={ModalVideoScreen}
                options={{
                  gestureEnabled: false,
                }}
              />
            </>
          ) : (
            <>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Register" component={RegisterScreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

App.propTypes = {};

const mapStateToProps = createStructuredSelector({
  app: makeSelectApp(),
  activeUser: makeSelectActiveUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(App);
