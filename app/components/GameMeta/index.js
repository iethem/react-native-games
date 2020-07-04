/**
 *
 * GameMeta
 *
 */

import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FormattedDate } from 'react-intl';
import ReadMore from 'react-native-read-more-text';

// import PropTypes from 'prop-types';

import GameMetaBlock from 'components/GameMetaBlock';
import GameMetaBlockWide from 'components/GameMetaBlockWide';

const regex = /<(.|\n)*?>/g;

const renderTruncatedFooter = handlePress => (
  <View style={styles.containerReadMore}>
    <Text style={styles.textReadMore} onPress={handlePress}>
      Read more
    </Text>
  </View>
);

const renderRevealedFooter = handlePress => (
  <View style={styles.containerReadMore}>
    <Text style={styles.textReadMore} onPress={handlePress}>
      Show less
    </Text>
  </View>
);

function GameMeta({ game }) {
  const platformPc = game.platforms.find(item => item.platform.slug === 'pc');
  const requirements = platformPc && platformPc.requirements;
  return (
    <>
      <View style={styles.containerAbout}>
        <Text style={styles.headingAbout}>About</Text>
        <ReadMore
          numberOfLines={3}
          renderTruncatedFooter={renderTruncatedFooter}
          renderRevealedFooter={renderRevealedFooter}
          // onReady={this._handleTextReady}
        >
          <Text style={styles.metaContent}>{game.description_raw}</Text>
        </ReadMore>
      </View>

      <GameMetaBlock
        title="Platforms"
        content={game.platforms.map(
          (platform, index) =>
            `${platform.platform.name}${
              index !== game.platforms.length - 1 ? ', ' : ''
            }`,
        )}
        secontTitle="Metascore"
        secondContent={game.metacritic}
      />

      <GameMetaBlock
        title="Genre"
        content={game.genres.map(
          (genre, index) =>
            `${genre.name}${index !== game.genres.length - 1 ? ', ' : ''}`,
        )}
        secontTitle="Release date"
        secondContent={
          <FormattedDate
            value={game.released}
            day="numeric"
            month="short"
            year="numeric"
          />
        }
      />

      <GameMetaBlock
        title="Developer"
        content={game.developers.map(
          (developer, index) =>
            `${developer.name}${
              index !== game.developers.length - 1 ? ', ' : ''
            }`,
        )}
        secontTitle="Publishers"
        secondContent={game.publishers.map(
          (publisher, index) =>
            `${publisher.name}${
              index !== game.publishers.length - 1 ? ', ' : ''
            }`,
        )}
      />

      <GameMetaBlockWide
        title="Age rating"
        content={game.esrb_rating ? game.esrb_rating.name : 'Not rated'}
      />

      <GameMetaBlockWide title="Website" content={game.website} />

      <GameMetaBlockWide title="Tags">
        <ReadMore
          numberOfLines={3}
          renderTruncatedFooter={renderTruncatedFooter}
          renderRevealedFooter={renderRevealedFooter}
          // onReady={this._handleTextReady}
        >
          <Text style={styles.metaContent}>
            {game.tags.map(
              (tag, index) =>
                `${tag.name}${index !== game.tags.length - 1 ? ', ' : ''}`,
            )}
          </Text>
        </ReadMore>
      </GameMetaBlockWide>

      {requirements && requirements.minimum && (
        <GameMetaBlockWide title="System Requirements For PC (minimum)">
          <ReadMore
            numberOfLines={3}
            renderTruncatedFooter={renderTruncatedFooter}
            renderRevealedFooter={renderRevealedFooter}
            // onReady={this._handleTextReady}
          >
            <Text style={styles.metaContent}>
              {requirements.minimum.replace(regex, '')}
            </Text>
          </ReadMore>
        </GameMetaBlockWide>
      )}

      {requirements && requirements.recommended && (
        <GameMetaBlockWide title="System Requirements For PC (recommended)">
          <ReadMore
            numberOfLines={3}
            renderTruncatedFooter={renderTruncatedFooter}
            renderRevealedFooter={renderRevealedFooter}
            // onReady={this._handleTextReady}
          >
            <Text style={styles.metaContent}>
              {requirements.recommended.replace(regex, '')}
            </Text>
          </ReadMore>
        </GameMetaBlockWide>
      )}
    </>
  );
}

GameMeta.propTypes = {};

const styles = StyleSheet.create({
  containerAbout: { marginVertical: 10, paddingHorizontal: 10 },
  headingAbout: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  metaContent: { color: '#fff', paddingTop: 5 },
  containerReadMore: { flexDirection: 'row' },
  textReadMore: {
    backgroundColor: '#ccc',
    color: '#000',
    marginTop: 5,
    paddingHorizontal: 2,
    fontSize: 12,
  },
});

export default memo(GameMeta);
