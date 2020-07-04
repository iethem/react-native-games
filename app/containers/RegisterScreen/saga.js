import { takeLatest, call, put, select } from 'redux-saga/effects';
import { setActiveUser } from 'containers/App/actions';
import { setUser } from 'utils/userStorage';
import { REGISTER } from './constants';
import makeSelectRegisterScreen from './selectors';
import { registerSuccess, registerFailure } from './actions';

function* register() {
  try {
    const { name, username, password, email } = yield select(
      makeSelectRegisterScreen(),
    );
    const user = yield call(setUser, name, username, password, email);

    yield put(registerSuccess(user));
    yield put(setActiveUser(user));
  } catch (error) {
    yield put(registerFailure(error));
  }
}

export default function* loginScreenSaga() {
  yield takeLatest(REGISTER, register);
}
