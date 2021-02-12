import mongoose from 'mongoose';
import pkg from 'mongoose';
const { Schema, model, Types } = pkg;
// import { Schema, model, Types } from 'mongoose';

const schema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
})

const User = mongoose.model('User', schema)

export default User;