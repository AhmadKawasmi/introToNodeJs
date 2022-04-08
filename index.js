import express from 'express'
import auth from './Auth.js'
import router from './server/routes/greetApi.js'
import mongoose from 'mongoose'

const app = express()

app.use('/greet/:user', auth)
app.use(express.json())
app.use('/greet', router)


const PORT = 3001
app.listen(PORT, function() {
    console.log('Up and running on port:' + PORT);
})