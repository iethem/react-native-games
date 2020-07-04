/*
 * ModalVideoScreen Messages
 *
 * This contains all the text for the ModalVideoScreen container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.ModalVideoScreen';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'ModalVideoScreen',
  },
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the ModalVideoScreen container!',
  },
});
