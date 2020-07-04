/**
 *
 * GameCardBasic
 *
 */

import React, { memo } from 'react';
import {
  ImageBackground,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
// import PropTypes from 'prop-types';

import { colors, device } from 'theme';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function GameCardBasic({ game, navigateToGameDetails }) {
  return (
    <TouchableOpacity onPress={() => navigateToGameDetails(game.slug)}>
      {!game.background_image ? (
        <View style={styles.gameBackground}>
          <Text style={styles.textNoImage}>No image found</Text>
          <View style={styles.containerText}>
            <Text style={styles.textGameName}>{game.name}</Text>
          </View>
        </View>
      ) : (
        <ImageBackground
          style={styles.gameBackground}
          source={{
            uri: game.background_image,
          }}
        >
          <View style={styles.containerText}>
            <Text style={styles.textGameName}>{game.name}</Text>
          </View>
        </ImageBackground>
      )}
    </TouchableOpacity>
  );
}

GameCardBasic.propTypes = {};

const styles = StyleSheet.create({
  gameBackground: {
    height: device.height / 4,
  },
  containerText: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textGameName: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingHorizontal: 4,
    paddingBottom: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textNoImage: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
  }
});

export default memo(GameCardBasic);
