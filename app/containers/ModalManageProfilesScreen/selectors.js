import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the modalManageProfilesScreen state domain
 */

const selectModalManageProfilesScreenDomain = state =>
  state.modalManageProfilesScreen || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ModalManageProfilesScreen
 */

const makeSelectModalManageProfilesScreen = () =>
  createSelector(selectModalManageProfilesScreenDomain, substate => substate);

export default makeSelectModalManageProfilesScreen;
export { selectModalManageProfilesScreenDomain };
