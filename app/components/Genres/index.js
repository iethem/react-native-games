/**
 *
 * Genres
 *
 */

import React, { memo } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { colors, device, images } from 'theme';
import SvgCategoryBackground from 'images/icons/Svg.CategoryBackground';

// data
const genresData = [
  { id: 1, image: 'action', title: 'Action' },
  { id: 2, image: 'strategy', title: 'Strategy' },
  { id: 3, image: 'rpg', title: 'RPG' },
  { id: 4, image: 'shooter', title: 'Shooter' },
  { id: 5, image: 'racing', title: 'Racing' },
];

function Genres() {
  const { length } = genresData;
  const bgWidth = Math.ceil((device.width - 16 - length * 18) / length);

  return (
    <View style={styles.container}>
      {genresData.map(item => (
        <TouchableOpacity
          activeOpacity={0.7}
          key={item.id}
          onPress={() => null}
          style={[styles.containerBlock, { height: bgWidth }]}
        >
          <View style={styles.containerBlockBackground}>
            <SvgCategoryBackground height={bgWidth - 2} width={bgWidth} />
          </View>

          <Image source={images[item.image]} style={styles.image} />
          <Text style={styles.genre}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

Genres.propTypes = {};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 8,
    paddingLeft: 16,
    paddingTop: 8,
  },
  containerBlock: {
    alignItems: 'center',
    borderColor: colors.categoryBorder,
    borderRadius: 4,
    borderWidth: 1,
    flex: 1,
    justifyContent: 'center',
    marginRight: 16,
  },
  containerBlockBackground: {
    borderRadius: 2,
    overflow: 'hidden',
    position: 'absolute',
  },
  image: {
    height: 48,
    width: 64,
  },
  genre: {
    marginTop: 2,
    marginBottom: 4,
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default memo(Genres);
