/**
 *
 * Asynchronously loads the component for Genres
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
