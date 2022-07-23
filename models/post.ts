import { Schema, model } from 'mongoose';

const postSchema = new Schema ({
    body: {type: String, required: true},
    authorId: {type: String, required: true},
    createdAt: {type: Date, default: Date.now }
}, {
    collection: "Post"
});

const Post = model('Post', postSchema);

export default Post;