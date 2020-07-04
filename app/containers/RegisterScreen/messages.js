/*
 * RegisterScreen Messages
 *
 * This contains all the text for the RegisterScreen container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.RegisterScreen';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'RegisterScreen',
  },
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the RegisterScreen container!',
  },
});
