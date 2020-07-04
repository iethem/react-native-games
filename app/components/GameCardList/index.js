/**
 *
 * GameCardList
 *
 */

import React, { memo } from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
} from 'react-native';
// import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import GameCardBasic from 'components/GameCardBasic';

import messages from './messages';

function GameCardList({ games, navigateToGameDetails }) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={games}
        renderItem={({ item }) => (
          <GameCardBasic
            game={item}
            navigateToGameDetails={navigateToGameDetails}
          />
        )}
        keyExtractor={item => item.id}
        // extraData={selected}
      />
    </SafeAreaView>
  );
}

GameCardList.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default memo(GameCardList);
