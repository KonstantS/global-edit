import React from 'react';

type TPostProps = {
    category: string,
    date: string,
    text: string,
}

const Post: React.FC<TPostProps> = ({category, date, text}) => {
    return (
        <article className='post'>
            <h3 className='post__title'>{category}</h3>
            <p className='post__text'>{date}</p>
            <p className='post__text'>{text}</p>
        </article>
    );
};

export default Post;
