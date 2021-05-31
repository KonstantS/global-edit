import { ILoginForm } from '../types/model/form';
import { TPostResponse } from '../types/model/post';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const posts = [
    {
        id: 1,
        title: 'latest blog post',
        date: 'October 15, 2018',
        text: 'Create Efficiency with a Creative Asset Management Platform'
    },
    {
        id: 2,
        title: 'RECENT TWEET',
        date: 'April 25, 2018',
        text: '#HenryStewartEvents are bringing their #CreativeOps show to NYC for the third time'
    }
]

const defaultApiHandler = <T = undefined>(chance = 1, returnData?: T) => (
    new Promise<T>((resolve, reject) => {
        if (Math.random() < chance) return resolve(returnData as T)
        return reject(returnData)
    })
)

export const signInApi = async (model: ILoginForm) => {
    await delay(500)
    return defaultApiHandler(0.5)
}

export const forgotPasswordApi = async (email: string) => {
    await delay(500)
    return defaultApiHandler()
}

export const fetchPostsApi = async () => {
    await delay(500)
    return await defaultApiHandler<TPostResponse>(1, posts)
}
