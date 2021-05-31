import React, { useEffect } from 'react';
import { useAppSelector } from '../../redux/hooks';
import Posts from '../layout/Posts';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../../redux/actions/post';

const PostContainer = () => {
    const {data} = useAppSelector(state => state.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actionCreators.fetchPosts())
    }, [dispatch])
    return (
        <Posts posts={data} />
    );
};

export default PostContainer;
