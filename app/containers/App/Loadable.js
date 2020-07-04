/**
 *
 * Asynchronously loads the component for App
 *
 */

import React from 'react';
import loadable from 'utils/loadable';
import ActivityIndicator from 'components/ActivityIndicator';

export default loadable(() => import('./index'), {
  fallback: <ActivityIndicator size="large" color="#0b173d" />,
});
