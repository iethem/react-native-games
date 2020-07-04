/*
 * FavoritesScreen Messages
 *
 * This contains all the text for the FavoritesScreen container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.FavoritesScreen';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'FavoritesScreen',
  },
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the FavoritesScreen container!',
  },
});
