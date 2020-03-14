import { toast } from 'react-toastify';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import {
  sendCreateClientRequestSuccess,
  sendCreateClientRequestFailure,
} from './actions';

export function* saveClient({ payload }) {
  try {
    yield call(api.post, '/clients', payload);
    toast.success('Cliente Salvo com sucesso');
    yield put(sendCreateClientRequestSuccess());
  } catch (e) {
    if (e.response) yield put(sendCreateClientRequestFailure(e.response.data));
    if (e.response && e.response.data.message)
      toast.error(e.response.data.message);
  }
}

export default all([takeLatest('clients/SEND_CREATE_REQUEST', saveClient)]);
