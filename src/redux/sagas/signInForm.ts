import { call, put, takeLatest } from 'redux-saga/effects';
import { signInApi } from '../../api';
import { actionCreators, signInFormActionTypes } from '../actions/signInform';
import { PayloadAction } from '@reduxjs/toolkit';
import { ILoginForm } from '../../types/model/form';

function* signInWorker(action: PayloadAction<ILoginForm>) {
    try {
        console.log(action.payload)
        yield put(actionCreators.signInStart())
        yield call(signInApi, action.payload)
        yield put(actionCreators.signInSuccess())
        console.log('%c Successfully signed in!', 'color: #94FF36;')
    } catch (e) {
        yield put(actionCreators.signInFailed())
        console.warn('Failed to sign in!')
    }
}


export default function* watchForm() {
    yield takeLatest(signInFormActionTypes.SIGN_IN, signInWorker)
}
