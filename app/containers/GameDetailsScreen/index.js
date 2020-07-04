/**
 *
 * GameDetailsScreen
 *
 */

import React, { memo, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedDate } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import VideoPlayer from 'react-native-video-player';

import { device, gStyle } from 'theme';

import ActivityIndicator from 'components/ActivityIndicator';
import GameMeta from 'components/GameMeta';
import GamePlatformIcons from 'components/GamePlatformIcons';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectGameDetailsScreen, {
  makeSelectGame,
  makeSelectGameLoading,
  makeSelectGameError,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getGameDetails } from './actions';

// import game from './game.json';

export function GameDetailsScreen({
  route,
  navigation,
  game,
  loading,
  error,
  getGame,
  onPress,
}) {
  useInjectReducer({ key: 'gameDetailsScreen', reducer });
  useInjectSaga({ key: 'gameDetailsScreen', saga });

  const { slug } = route.params;

  useEffect(() => {
    getGame(slug);
  }, []);

  return (
    <SafeAreaView style={gStyle.container}>
      {!game || loading ? (
        <ActivityIndicator />
      ) : (
        <ImageBackground
          style={styles.poster}
          opacity={0.2}
          source={{
            uri: game.background_image || '',
          }}
        >
          <ScrollView
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
            style={{ marginBottom: 24 }}
          >
            <View style={styles.containerDate}>
              <Text style={styles.textDate}>
                <FormattedDate
                  value={game.released}
                  day="numeric"
                  month="short"
                  year="numeric"
                />
              </Text>
              <GamePlatformIcons platforms={game.parent_platforms} />
            </View>

            <Text style={styles.averagePlayTime}>
              AVERAGE PLAYTIME: {game.playtime} HOUR
            </Text>

            <Text style={styles.gameName}>{game.name}</Text>

            <VideoPlayer
              style={styles.videoPlayer}
              endWithThumbnail
              thumbnail={{
                uri: (game.clip && game.clip.preview) || '',
              }}
              video={{
                uri: (game.clip && game.clip.clip) || '',
              }}
            />

            <View style={styles.containerAddToFavorites}>
              <TouchableOpacity
                style={styles.buttonAddToFavorites}
                onPress={onPress}
              >
                <Text>Add to Favorites</Text>
              </TouchableOpacity>
            </View>

            <GameMeta game={game} />
          </ScrollView>
        </ImageBackground>
      )}
    </SafeAreaView>
  );
}

GameDetailsScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#000',
  },
  poster: {
    width: '100%',
    height: device.height,
  },
  containerDate: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 24,
    paddingBottom: 4,
  },
  textDate: {
    backgroundColor: '#fff',
    color: '#000',
    fontSize: 12,
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#fff',
    letterSpacing: 1.2,
  },
  averagePlayTime: {
    paddingTop: 4,
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
    letterSpacing: 2,
  },
  gameName: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 28,
    paddingVertical: 16,
    textAlign: 'center',
  },
  videoPlayer: {
    marginTop: 10,
  },
  containerAddToFavorites: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  buttonAddToFavorites: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});

const mapStateToProps = createStructuredSelector({
  gameDetailsScreen: makeSelectGameDetailsScreen(),
  game: makeSelectGame(),
  loading: makeSelectGameLoading(),
  error: makeSelectGameError(),
});

function mapDispatchToProps(dispatch) {
  return {
    getGame: slug => dispatch(getGameDetails(slug)),
    onPress: () => console.log('onPress'),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(GameDetailsScreen);
