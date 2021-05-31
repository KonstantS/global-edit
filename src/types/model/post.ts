export interface IPost {
    id: number,
    title: string,
    date: string,
    text: string
}

export type TPostResponse = IPost[]
