/**
 *
 * SearchScreen
 *
 */

import React, { memo, useState, useCallback } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useFocusEffect } from '@react-navigation/native';

import { colors, fonts, gStyle } from 'theme';

import ActivityIndicator from 'components/ActivityIndicator';
import GameCardList from 'components/GameCardList';
import SvgBackground from 'images/icons/Svg.Background';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectSearchScreen, {
  makeSelectSearchResult,
  makeSelectSearchLoading,
  makeSelectSearchError,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { searchGame, clearSearchResults } from './actions';
import messages from './messages';

export function SearchScreen({
  navigation,
  result,
  loading,
  error,
  handleSearch,
  clearScreen,
}) {
  useInjectReducer({ key: 'searchScreen', reducer });
  useInjectSaga({ key: 'searchScreen', saga });

  // TODO implement result.next for other search results

  const [value, onChangeText] = useState('');

  // to clean search results from the current screen
  // useFocusEffect(
  //   useCallback(
  //     () => () => {
  //       clearScreen();
  //     },
  //     [],
  //   ),
  // );

  const navigateToGameDetails = slug => {
    navigation.navigate('GameDetails', {
      slug,
    });
  };

  return (
    <SafeAreaView style={gStyle.container}>
      <View style={gStyle.posAbsolute}>
        <SvgBackground />
      </View>

      <TextInput
        style={styles.textInputSearch}
        onChangeText={text => onChangeText(text)}
        value={value}
        placeholder="Search.."
        placeholderTextColor="#ccc"
      />
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => handleSearch(value)}
        style={styles.containerSearch}
      >
        <Text style={styles.textSearch}>Search</Text>
      </TouchableOpacity>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <GameCardList
          games={result.results}
          navigateToGameDetails={id => navigateToGameDetails(id)}
        />
      )}
    </SafeAreaView>
  );
}

SearchScreen.propTypes = {};

const styles = StyleSheet.create({
  textInputSearch: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    color: '#fff',
  },
  containerSearch: {
    alignItems: 'center',
    backgroundColor: colors.profileEditBackground,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 24,
  },
  textSearch: {
    color: colors.white,
    fontFamily: fonts.medium,
    paddingHorizontal: 16,
    paddingVertical: 8,
    textTransform: 'uppercase',
  },
});

const mapStateToProps = createStructuredSelector({
  searchScreen: makeSelectSearchScreen(),
  result: makeSelectSearchResult(),
  loading: makeSelectSearchLoading(),
  error: makeSelectSearchError(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleSearch: query => dispatch(searchGame(query)),
    clearScreen: () => dispatch(clearSearchResults()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(SearchScreen);
