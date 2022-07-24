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

export interface Ingredient {
    _id?: string,
    name: string,
    brand: string,
    include?: boolean
}