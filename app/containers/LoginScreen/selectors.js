import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the loginScreen state domain
 */

const selectLoginScreenDomain = state => state.loginScreen || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by LoginScreen
 */

const makeSelectLoginScreen = () =>
  createSelector(selectLoginScreenDomain, substate => substate);

export default makeSelectLoginScreen;
export { selectLoginScreenDomain };
