import express from 'express'
import auth from './Auth.js'
import router from './server/routes/greetApi.js'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
import User from './server/models/User.js'

const u = new User({
    name: 'sameer',
    email: 'ahmadkawasmi@gmail.com',
    username: 'Ahmad Kawasmi',
    isLoggedIn: true,
    lastLoggedIn: 3453,
    password: '2911919'

})

// u.save().then(function(res) {
//     console.log("saved");
//     console.log(res);
// })

dotenv.config()
const mongoUri = process.env.MONGO_URI
mongoose.connect(mongoUri, function() {
    console.log("connected to database");
})

const app = express()

app.use('/greet/:user', auth)
app.use(express.json())
app.use('/greet', router)


const PORT = process.env.PORT
app.listen(PORT, function() {
    console.log('Up and running on port:' + PORT);
})