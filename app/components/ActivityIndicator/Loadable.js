/**
 *
 * Asynchronously loads the component for ActivityIndicator
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
