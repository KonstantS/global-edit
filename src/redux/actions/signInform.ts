import { createAction } from '@reduxjs/toolkit'
import { ILoginForm } from '../../types/model/form';

export enum signInFormActionTypes {
    SIGN_IN = 'SIGN_IN',
    SIGN_IN_START = 'SIGN_IN_START',
    SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS',
    SIGN_IN_FAILED = 'SIGN_IN_FAILED',
    SIGN_IN_END = 'SIGN_IN_FAILED',
}

const signInStart = createAction(signInFormActionTypes.SIGN_IN_START)
const signInSuccess = createAction(signInFormActionTypes.SIGN_IN_SUCCESS)
const signInFailed = createAction(signInFormActionTypes.SIGN_IN_FAILED)
const signInEnd = createAction(signInFormActionTypes.SIGN_IN_END)
const handleSignIn = createAction<ILoginForm>(signInFormActionTypes.SIGN_IN)

export const actionCreators = {
    signInStart,
    signInSuccess,
    signInFailed,
    signInEnd,
    handleSignIn,
}

export type TActionCreators = typeof actionCreators
