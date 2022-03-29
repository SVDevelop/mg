import {takeEvery} from 'redux-saga/effects'
import api from './api';
import { apiACtions, API_ACTIONS } from './actions';

export function* onApiLoad() {
    const actionType = type.replace(API_ACTIONS.FEATCH_START, '').toLowerCase();

    try {
        const response = yield api.fetch(actionType, payload)
        yield put(apiACtions.fetchSuccess(actionType, response))
    } catch (e) {
        yield put(apiACtions.fetchFailure(actionType, e))
    }
}

export function* watchApiLoad() {
    yield takeEvery(action=>action.type.startsWith(API_ACTIONS.FEATCH_START), onApiLoad)
}

export function* apiRootSaga() {
    yield all([
        watchApiLoad()
    ])
}