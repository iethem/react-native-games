import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the registerScreen state domain
 */

const selectRegisterScreenDomain = state =>
  state.registerScreen || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by RegisterScreen
 */

const makeSelectRegisterScreen = () =>
  createSelector(selectRegisterScreenDomain, substate => substate);

export default makeSelectRegisterScreen;
export { selectRegisterScreenDomain };
