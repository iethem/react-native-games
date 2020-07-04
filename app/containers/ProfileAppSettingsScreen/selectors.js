import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the profileAppSettingsScreen state domain
 */

const selectProfileAppSettingsScreenDomain = state =>
  state.profileAppSettingsScreen || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ProfileAppSettingsScreen
 */

const makeSelectProfileAppSettingsScreen = () =>
  createSelector(selectProfileAppSettingsScreenDomain, substate => substate);

export default makeSelectProfileAppSettingsScreen;
export { selectProfileAppSettingsScreenDomain };
