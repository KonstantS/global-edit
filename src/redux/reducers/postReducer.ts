import { createReducer } from '@reduxjs/toolkit';
import { actionCreators } from '../actions/post';
import IRootReducer from '../../types/state/IRootReducer';

export const postsInitialState: IRootReducer['posts'] = {
    loading: false,
    error: false,
    data: []
}

const postReducer = createReducer(postsInitialState, builder =>
    builder
        .addCase(actionCreators.fetchPostsStart, state => ({
            ...state,
            loading: true,
        }))
        .addCase(actionCreators.fetchPostsSuccess, (state, action) => ({
            ...state,
            loading: false,
            error: false,
            data: action.payload,
        }))
        .addCase(actionCreators.fetchPostsFailed, state => ({
            ...state,
            loading: false,
            error: false,
        }))
        .addCase(actionCreators.fetchPostsEnd, (state) => ({
            ...state,
            loading: false,
        }))
)

export default postReducer
