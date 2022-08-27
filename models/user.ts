import { Schema, model } from 'mongoose';

const userSchema = new Schema ({
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
}, {
    collection: "User"
});

const User = model('User', userSchema);

export default User;