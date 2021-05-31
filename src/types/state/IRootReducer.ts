import { IPost } from '../model/post';

interface IRootReducer {
    posts: {
        loading: boolean,
        error: boolean,
        data: IPost[]
    },
    loginForm: {
        loading: boolean,
        error: boolean,
        signedIn: boolean,
    },
    forgotPasswordForm: {
        loading: boolean,
        error: boolean,
        success: boolean,
    },
}

export default IRootReducer
