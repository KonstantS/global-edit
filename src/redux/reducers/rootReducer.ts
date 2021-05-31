import { combineReducers } from 'redux';
import postReducer from './postReducer';
import IRootReducer from '../../types/state/IRootReducer';
import signInFormReducer from './signInFormReducer';
import forgotPasswordFormReducer from './forgotPasswordFormReducer';

const rootReducer = combineReducers<IRootReducer>({
    posts: postReducer,
    loginForm: signInFormReducer,
    forgotPasswordForm: forgotPasswordFormReducer,
})

export default rootReducer
