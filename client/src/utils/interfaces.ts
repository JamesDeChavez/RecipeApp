export interface User {
    _id?: string,
    firstName: string,
    lastName: string
};

export interface Post {
    _id?: string,
    body: string,
    authorId: string
}

export interface RegisterInputs{
    username: string,
    email: string,
    password: string,
    confirmPW: string
}

export interface RegisterValidChecks{
    username: boolean,
    email: boolean,
    password: boolean,
    confirmPW: boolean
}

export interface RegisterFocus{
    username: boolean,
    email: boolean,
    password: boolean,
    confirmPW: boolean
}

export interface LoginInputs{
    username: string,
    password: string
}

export interface Ingredient {
    _id?: string,
    name: string,
    brand: string,
    include?: boolean
}

export interface Video {
    _id?: string,
    title: string,
    thumbnail: string,
    channel: string,
    videoId: string
}