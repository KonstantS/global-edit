import { createReducer } from '@reduxjs/toolkit';
import { actionCreators } from '../actions/signInform';
import IRootReducer from '../../types/state/IRootReducer';

export const formState: IRootReducer['loginForm'] = {
    loading: false,
    signedIn: false,
    error: false,
}


const signInFormReducer = createReducer(formState, builder =>
    builder
        .addCase(actionCreators.signInStart, state => ({
            ...state,
            loading: true,
        }))
        .addCase(actionCreators.signInSuccess, state => ({
            ...state,
            loading: false,
            error: false,
        }))
        .addCase(actionCreators.signInFailed, state => ({
            ...state,
            loading: false,
            error: false,
        }))
)

export default signInFormReducer
