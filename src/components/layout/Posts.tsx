import React from 'react';
import Post from '../UI/Post';
import { IPost } from '../../types/model/post';

type TPostsProps = {
    posts: IPost[]
}

const Posts: React.FC<TPostsProps> = ({posts}: TPostsProps) => {
    return (
        <section className='posts'>
            {posts.map(p => (
                <Post
                    key={p.id}
                    category={p.title}
                    date={p.date}
                    text={p.text}
                />
            ))}
        </section>
    );
};

export default Posts;
