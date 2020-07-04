/**
 *
 * GameMetaBlock
 *
 */

import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

function GameMetaBlock({ title, content, secontTitle, secondContent }) {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.title}>{secontTitle}</Text>
        <Text style={styles.content}>{secondContent}</Text>
      </View>
    </View>
  );
}

GameMetaBlock.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    paddingHorizontal: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: { width: '50%', paddingRight: 8 },
  title: {
    color: '#adadad',
    fontSize: 12,
    fontWeight: 'bold',
    // borderBottomWidth: 1,
    // borderColor: '#fff',
  },
  content: { color: '#fff', fontSize: 18, marginTop: 2 },
});

export default memo(GameMetaBlock);
