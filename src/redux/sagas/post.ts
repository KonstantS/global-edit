import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchPostsApi } from '../../api';
import { actionCreators, fetchPostsActionTypes } from '../actions/post';
import { TPostResponse } from '../../types/model/post';

function* fetchPostsWorker() {
    try {
        yield put(actionCreators.fetchPostsStart())
        const data: TPostResponse = yield call(fetchPostsApi)
        yield put(actionCreators.fetchPostsSuccess(data))
    } catch (e) {
        console.log(e)
        yield put(actionCreators.fetchPostsFailed())
    }
}


export default function* watchFetchPosts() {
    yield takeLatest(fetchPostsActionTypes.FETCH_POSTS, fetchPostsWorker)
}
