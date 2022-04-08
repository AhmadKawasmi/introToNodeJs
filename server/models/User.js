import mongoose from "mongoose";

const Schema = mongoose.Schema
const userSchema = new Schema({
    name: String,
    email: String,
    username: String,
    isLoggedIn: Boolean,
    lastLoggedIn: Number,
    password: String,
})

const User = mongoose.model('User', userSchema)

export default User

// const u = new User({
//     name: 'ahmad',
//     email: 'ahmadkawasmi@gmail.com',
//     username: 'Ahmad Kawasmi',
//     isLoggedIn: true,
//     lastLoggedIn: 3453,
//     password: '2911919'

// })

// u.save()