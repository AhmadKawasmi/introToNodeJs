import express from 'express'
import auth from './Auth.js'

const app = express()
const msgs = []

app.use('/greet/:user', auth)

app.post('/greet/:user/:msg?', function(req, res) {
    const msg = req.params.msg
    msgs.push(msg)
    res.send({ msg: "your msg has been saved" })
})

app.delete('/greet/:user/:index?', function(req, res) {
    const index = req.params.index
    const msg = msgs.splice(index, 1)
    res.send({ msg: msg + " has been deleted" })
})

app.put('/greet/:user/:oldMsg/:newMsg', function(req, res) {
    const newMsg = req.params.newMsg
    const oldMsg = req.params.oldMsg
    msgs[oldMsg] = newMsg
    res.send({ msg: "your msg has been updated" })
})


app.get('/greet/:user/', function(req, res) { //msg is a parameter  // ? is to make the msg optional
    res.send(msgs)
})



const PORT = 3001
app.listen(PORT, function() {
    console.log('Up and running on port:' + PORT);
})