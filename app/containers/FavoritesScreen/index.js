/**
 *
 * FavoritesScreen
 *
 */

import React, { memo, useLayoutEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { colors, fonts, gStyle } from 'theme';

import Header from 'components/Header';

import SvgBackground from 'images/icons/Svg.Background';
import SvgFavorites from 'images/icons/Svg.Favorites';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectFavoritesScreen from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function FavoritesScreen(props) {
  useInjectReducer({ key: 'favoritesScreen', reducer });
  useInjectSaga({ key: 'favoritesScreen', saga });

  const { navigation } = props;

  return (
    <View style={gStyle.container}>
      <View style={gStyle.posAbsolute}>
        <SvgBackground />
      </View>

      <Header navigation={navigation} title="Favorites" />

      <View style={styles.containerContent}>
        <View style={styles.containerIcon}>
          <SvgFavorites fill={colors.profileBackground} size={48} />
        </View>

        <Text style={styles.heading}>You have no favorites</Text>

        <Text style={styles.description}>
          Games you favorite will appear here.
        </Text>
      </View>
    </View>
  );
}

FavoritesScreen.propTypes = {
  // required
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  containerContent: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  containerIcon: {
    alignItems: 'center',
    borderColor: colors.profileBackground,
    borderRadius: 50,
    borderWidth: 2,
    height: 100,
    justifyContent: 'center',
    marginBottom: 32,
    marginTop: 48,
    width: 100,
  },
  heading: {
    color: colors.white,
    fontFamily: fonts.medium,
    fontSize: 18,
    marginBottom: 16,
    textAlign: 'center',
    width: 300,
  },
  description: {
    color: colors.heading,
    fontFamily: fonts.regular,
    fontSize: 16,
    marginBottom: 48,
    textAlign: 'center',
    width: 300,
  },
});

const mapStateToProps = createStructuredSelector({
  favoritesScreen: makeSelectFavoritesScreen(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(FavoritesScreen);
