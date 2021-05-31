import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom';
import Posts from './Posts';
import { posts } from '../../api';

const WithRouter: React.FC = ({children}) => {
    const history = createMemoryHistory()
    return (
        <Router history={history}>
            {children}
        </Router>
    )
}

test('renders correct amount of posts', async () => {
    render(
        <WithRouter>
            <Posts
                posts={posts}
            />
        </WithRouter>
    )
    const items = await screen.findAllByRole('article')
    expect(items).toHaveLength(posts.length)
});

test('renders correct post structure', async () => {
    render(
        <WithRouter>
            <Posts
                posts={posts}
            />
        </WithRouter>
    )
    const item = await screen.findAllByRole('article')
    const firstPost = posts[0]
    let toCheck
    if (item[0]) toCheck = item[0]

    expect(toCheck?.querySelector('h3')!.textContent).toBe(firstPost.title)
    expect(toCheck?.querySelectorAll('p')![0]!.textContent).toBe(firstPost.date)
    expect(toCheck?.querySelectorAll('p')![1]!.textContent).toBe(firstPost.text)
});

