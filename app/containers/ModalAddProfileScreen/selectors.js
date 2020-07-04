import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the modalAddProfileScreen state domain
 */

const selectModalAddProfileScreenDomain = state =>
  state.modalAddProfileScreen || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ModalAddProfileScreen
 */

const makeSelectModalAddProfileScreen = () =>
  createSelector(selectModalAddProfileScreenDomain, substate => substate);

export default makeSelectModalAddProfileScreen;
export { selectModalAddProfileScreenDomain };
