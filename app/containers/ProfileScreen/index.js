/**
 *
 * ProfileScreen
 *
 */

import React, { memo, useLayoutEffect } from 'react';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { colors, fonts, gStyle } from 'theme';

// components
import HeaderAccounts from 'components/HeaderAccounts';
import TouchLineItem from 'components/TouchLineItem';

// icons
import SvgBackground from 'images/icons/Svg.Background';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectProfileScreen from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const alertSignOut = () => {
  Alert.alert(
    'Sign Out',
    'Are you sure that you want to sign out?',
    [{ text: 'No' }, { text: 'Yes' }],
    { cancelable: false },
  );
};

export function ProfileScreen(props) {
  useInjectReducer({ key: 'profileScreen', reducer });
  useInjectSaga({ key: 'profileScreen', saga });

  const { navigation } = props;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text>
          <FormattedMessage {...messages.title} />
        </Text>
      ),
    });
  }, []);

  return (
    <View style={gStyle.container}>
      <View style={gStyle.posAbsolute}>
        <SvgBackground />
      </View>

      <HeaderAccounts navigation={navigation} />

      <ScrollView>
        <TouchLineItem
          onPress={() => navigation.navigate('ProfileScreenWishlist')}
          text="Wishlist"
        />
        <TouchLineItem
          onPress={() => navigation.navigate('ProfileScreenAppSettings')}
          text="App Settings"
        />
        <TouchLineItem onPress={() => null} text="Account" />
        <TouchLineItem onPress={() => null} text="Legal" />
        <TouchLineItem onPress={() => null} text="Help" />
        <TouchLineItem onPress={() => alertSignOut()} text="Log Out" />

        <Text style={styles.versionText}>Version: 0.0.1</Text>
      </ScrollView>
    </View>
  );
}

ProfileScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  versionText: {
    color: colors.inactiveGrey,
    fontFamily: fonts.regular,
    fontSize: 18,
    marginLeft: 16,
    paddingVertical: 16,
  },
});

const mapStateToProps = createStructuredSelector({
  profileScreen: makeSelectProfileScreen(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(ProfileScreen);
