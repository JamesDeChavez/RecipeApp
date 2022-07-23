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