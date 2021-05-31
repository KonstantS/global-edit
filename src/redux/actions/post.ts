import { createAction } from '@reduxjs/toolkit'
import { TPostResponse } from '../../types/model/post';

export enum fetchPostsActionTypes {
    FETCH_POSTS = 'FETCH_POSTS',
    FETCH_POSTS_START = 'FETCH_POSTS_START',
    FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
    FETCH_POSTS_FAILED = 'FETCH_POSTS_FAILED',
    FETCH_POSTS_END = 'FETCH_POSTS_END',
}

const fetchPosts = createAction(fetchPostsActionTypes.FETCH_POSTS)
const fetchPostsStart = createAction(fetchPostsActionTypes.FETCH_POSTS_START)
const fetchPostsSuccess = createAction<TPostResponse>(fetchPostsActionTypes.FETCH_POSTS_SUCCESS)
const fetchPostsFailed = createAction(fetchPostsActionTypes.FETCH_POSTS_FAILED)
const fetchPostsEnd = createAction(fetchPostsActionTypes.FETCH_POSTS_END)

export const actionCreators = {
    fetchPostsStart,
    fetchPostsSuccess,
    fetchPostsFailed,
    fetchPostsEnd,
    fetchPosts,
}

export type TActionCreators = typeof actionCreators
