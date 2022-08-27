export interface User {
    _id?: string,
    username: string,
    email: string,
    password?: string,
    recipes?: Recipe[],
    ingredients?: Ingredient[]
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

export interface Recipe {
    _id?: string,
    title: string,
    video: Video,
    ingredients: Ingredient[],
    instructions: (Instruction)[]
}

export interface Ingredient {
    _id?: string,
    name: string,
    brand?: string | null,
    amount?: string | null,
    userId?: string
    include?: boolean
}

export interface Instruction {
    summary: {
        action: string,
        items: string[]
    },
    description: string,
    ingredients: Ingredient[],
    time: string | null,
}

export interface Video {
    _id?: string,
    title: string,
    thumbnail: string,
    channel: string,
    videoId: string
}

export interface Profile {
    _id?: string,
    username: string,
    email: string,
    password: string
}