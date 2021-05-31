import { createReducer } from '@reduxjs/toolkit';
import { actionCreators } from '../actions/forgotPasswordForm';
import IRootReducer from '../../types/state/IRootReducer';

const initialState: IRootReducer['forgotPasswordForm'] = {
    loading: false,
    success: false,
    error: false,
}


const forgotPasswordFormReducer = createReducer(initialState, builder =>
    builder
        .addCase(actionCreators.forgotPasswordSubmitStart, state => {
            state.loading = true
        })
        .addCase(actionCreators.forgotPasswordSubmitSuccess, state => {
            state.loading = false
            state.success = true
            state.error = false
        })
        .addCase(actionCreators.forgotPasswordSubmitEnd, state => {
            state.loading = false
            state.error = false
        })
        .addCase(actionCreators.forgotPasswordSubmitFailed, state => {
            state.loading = false
            state.error = true
        })
        .addCase(actionCreators.forgotPasswordSubmitReset, state => {
            state.loading = false
            state.error = false
            state.success = false
        })
)

export default forgotPasswordFormReducer
