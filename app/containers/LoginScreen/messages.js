/*
 * LoginScreen Messages
 *
 * This contains all the text for the LoginScreen container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.LoginScreen';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'LoginScreen',
  },
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the LoginScreen container!',
  },
});
