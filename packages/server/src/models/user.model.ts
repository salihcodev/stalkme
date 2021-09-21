// pkgs:
import mongoose from 'mongoose';
const { Schema } = mongoose;

// create user schema:
const userSchema = new Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    id: { type: String },
});

// create user model:
const User = mongoose.model('User', userSchema);
export default User;
