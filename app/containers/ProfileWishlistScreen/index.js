/**
 *
 * ProfileWishlistScreen
 *
 */

import React, { memo, useLayoutEffect } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { gStyle } from 'theme';

import Header from 'components/Header';

import SvgBackground from 'images/icons/Svg.Background';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectProfileWishlistScreen from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function ProfileWishlistScreen(props) {
  useInjectReducer({ key: 'profileWishlistScreen', reducer });
  useInjectSaga({ key: 'profileWishlistScreen', saga });

  const { navigation } = props;

  return (
    <View style={gStyle.container}>
      <View style={gStyle.posAbsolute}>
        <SvgBackground />
      </View>

      <Header navigation={navigation} showBack title="Wishlist" />
    </View>
  );
}

ProfileWishlistScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  profileWishlistScreen: makeSelectProfileWishlistScreen(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(ProfileWishlistScreen);
