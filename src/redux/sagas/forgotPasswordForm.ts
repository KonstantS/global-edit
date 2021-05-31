import { call, put, takeLatest } from 'redux-saga/effects';
import { forgotPasswordApi } from '../../api';
import { actionCreators, forgotPasswordFormActionTypes } from '../actions/forgotPasswordForm';
import { PayloadAction } from '@reduxjs/toolkit';

function* forgotPasswordWorker(action: PayloadAction<string>) {
    try {
        console.log(action.payload)
        yield put(actionCreators.forgotPasswordSubmitStart())
        yield call(forgotPasswordApi, action.payload)
        yield put(actionCreators.forgotPasswordSubmitSuccess())
    } catch (e) {
        yield put(actionCreators.forgotPasswordSubmitFailed())
    }
}


export default function* watchForgotPasswordForm() {
    yield takeLatest(forgotPasswordFormActionTypes.FORGOT_PASSWORD_SUBMIT, forgotPasswordWorker)
}
