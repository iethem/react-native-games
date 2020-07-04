/*
 * ProfileScreen Messages
 *
 * This contains all the text for the ProfileScreen container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.ProfileScreen';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'ProfileScreen',
  },
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the ProfileScreen container!',
  },
});
