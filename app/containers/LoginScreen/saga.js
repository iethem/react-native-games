import { takeLatest, call, put, select } from 'redux-saga/effects';
import { setActiveUser } from 'containers/App/actions';
import { getUserByUsername } from 'utils/userStorage';

import { LOGIN } from './constants';
import makeSelectLoginScreen from './selectors';
import { loginSuccess, loginFailure } from './actions';

function* login() {
  try {
    const { username, password } = yield select(makeSelectLoginScreen());
    const user = yield call(getUserByUsername, username, password);
    if (user) {
      yield put(loginSuccess(user));
      yield put(setActiveUser(user));
    } else {
      throw new Error('Incorrect username or password.');
    }
  } catch (error) {
    yield put(loginFailure(error));
  }
}

export default function* loginScreenSaga() {
  yield takeLatest(LOGIN, login);
}
