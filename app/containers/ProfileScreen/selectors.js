import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the profileScreen state domain
 */

const selectProfileScreenDomain = state => state.profileScreen || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ProfileScreen
 */

const makeSelectProfileScreen = () =>
  createSelector(selectProfileScreenDomain, substate => substate);

export default makeSelectProfileScreen;
export { selectProfileScreenDomain };
