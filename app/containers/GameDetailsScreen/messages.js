/*
 * GameDetailsScreen Messages
 *
 * This contains all the text for the GameDetailsScreen container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.GameDetailsScreen';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'GameDetailsScreen',
  },
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the GameDetailsScreen container!',
  },
});
