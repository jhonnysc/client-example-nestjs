import { all } from 'redux-saga/effects';

import clients from './clients/sagas';

export default function* rootSaga() {
  return yield all([clients]);
}
