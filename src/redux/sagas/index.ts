import {all} from 'redux-saga/effects'
import watchForm from './signInForm';
import watchFetchPosts from './post';
import watchForgotPasswordForm from './forgotPasswordForm';

export default function* rootSaga() {
    yield all([
        watchForm(),
        watchFetchPosts(),
        watchForgotPasswordForm()
    ])
}
