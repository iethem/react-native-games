/**
 *
 * Asynchronously loads the component for SlideShow
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
