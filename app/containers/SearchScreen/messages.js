/*
 * SearchScreen Messages
 *
 * This contains all the text for the SearchScreen container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.SearchScreen';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'SearchScreen',
  },
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the SearchScreen container!',
  },
});
