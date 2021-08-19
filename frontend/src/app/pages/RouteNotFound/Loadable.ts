/**
*
* Asynchronously loads the component for RouteNotFound
*
*/

import { lazyLoad } from 'utils/loadable';

export const RouteNotFound = lazyLoad(() => import('./index'), module => module.RouteNotFound);