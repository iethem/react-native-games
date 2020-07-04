/**
 *
 * GameMetaBlockWide
 *
 */

import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

function GameMetaBlockWide({ title, content, children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {children || <Text style={styles.content}>{content}</Text>}
    </View>
  );
}

GameMetaBlockWide.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  title: {
    color: '#adadad',
    fontSize: 12,
    fontWeight: 'bold',
  },
  content: { color: '#fff', fontSize: 18, marginTop: 2 },
});

export default memo(GameMetaBlockWide);
