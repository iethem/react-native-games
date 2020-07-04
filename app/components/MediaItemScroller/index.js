/**
 *
 * MediaItemScroller
 *
 */

import React, { memo } from 'react';
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

import { colors, device } from 'theme';

import ActivityIndicator from 'components/ActivityIndicator';

function MediaItemScroller({ games, loading, error, navigateToGameDetails }) {
  if (loading) return <ActivityIndicator size="small" />;

  return (
    <FlatList
      contentContainerStyle={{ paddingLeft: 16, paddingRight: 8 }}
      data={games}
      horizontal
      keyExtractor={({ id }) => id.toString()}
      renderItem={({ item }) => {
        const renderItem = item.background_image ? (
          <ImageBackground
            source={{ uri: item.background_image }}
            style={styles.image}
          >
            <View style={styles.textContainer}>
              <Text style={styles.innerText}>{item.name}</Text>
            </View>
          </ImageBackground>
        ) : (
          <View style={styles.placeholder} />
        );

        return (
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.container}
            onPress={() => navigateToGameDetails(item.slug)}
          >
            {renderItem}
          </TouchableOpacity>
        );
      }}
      showsHorizontalScrollIndicator={false}
    />
  );
}

MediaItemScroller.propTypes = {};

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    height: 130,
    marginRight: 8,
    overflow: 'hidden',
    width: 93,
  },
  placeholder: {
    backgroundColor: colors.infoGrey,
    height: '100%',
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerText: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingHorizontal: 4,
    paddingBottom: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    // textShadowColor: 'rgba(0, 0, 0, 0.75)',
    // textShadowOffset: { width: 1, height: 1 },
    // textShadowRadius: 5,
  },
});

export default memo(MediaItemScroller);
