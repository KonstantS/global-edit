import { createAction } from '@reduxjs/toolkit'

export enum forgotPasswordFormActionTypes {
    FORGOT_PASSWORD_SUBMIT = 'FORGOT_PASSWORD_SUBMIT',
    FORGOT_PASSWORD_SUBMIT_START = 'FORGOT_PASSWORD_SUBMIT_START',
    FORGOT_PASSWORD_SUBMIT_SUCCESS = 'FORGOT_PASSWORD_SUBMIT_SUCCESS',
    FORGOT_PASSWORD_SUBMIT_END = 'FORGOT_PASSWORD_SUBMIT_END',
    FORGOT_PASSWORD_SUBMIT_FAILED = 'FORGOT_PASSWORD_SUBMIT_FAILED',
    FORGOT_PASSWORD_RESET = 'FORGOT_PASSWORD_RESET',
}

const forgotPasswordSubmit = createAction<string>(forgotPasswordFormActionTypes.FORGOT_PASSWORD_SUBMIT)
const forgotPasswordSubmitStart = createAction(forgotPasswordFormActionTypes.FORGOT_PASSWORD_SUBMIT_START)
const forgotPasswordSubmitSuccess = createAction(forgotPasswordFormActionTypes.FORGOT_PASSWORD_SUBMIT_SUCCESS)
const forgotPasswordSubmitFailed = createAction(forgotPasswordFormActionTypes.FORGOT_PASSWORD_SUBMIT_END)
const forgotPasswordSubmitEnd = createAction(forgotPasswordFormActionTypes.FORGOT_PASSWORD_SUBMIT_FAILED)
const forgotPasswordSubmitReset = createAction(forgotPasswordFormActionTypes.FORGOT_PASSWORD_RESET)

export const actionCreators = {
    forgotPasswordSubmit,
    forgotPasswordSubmitStart,
    forgotPasswordSubmitSuccess,
    forgotPasswordSubmitEnd,
    forgotPasswordSubmitFailed,
    forgotPasswordSubmitReset,
}

export type TActionCreators = typeof actionCreators
