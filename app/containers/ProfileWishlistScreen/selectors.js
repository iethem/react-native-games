import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the profileWishlistScreen state domain
 */

const selectProfileWishlistScreenDomain = state =>
  state.profileWishlistScreen || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ProfileWishlistScreen
 */

const makeSelectProfileWishlistScreen = () =>
  createSelector(selectProfileWishlistScreenDomain, substate => substate);

export default makeSelectProfileWishlistScreen;
export { selectProfileWishlistScreenDomain };
