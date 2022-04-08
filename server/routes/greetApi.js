import express from "express";

const router = express.Router()
const msgs = []



router.post('/:user/:msg?', function(req, res) {
    const msg = req.params.msg
    msgs.push(msg)
    res.send({ msg: "your msg has been saved" })
})

router.delete('/:user/:index?', function(req, res) {
    const index = req.params.index
    const msg = msgs.splice(index, 1)
    res.send({ msg: msg + " has been deleted" })
})

router.put('/:user/:oldMsg/:newMsg', function(req, res) {
    const newMsg = req.params.newMsg
    const oldMsg = req.params.oldMsg
    msgs[oldMsg] = newMsg
    res.send({ msg: "your msg has been updated" })
})


router.get('/:user/', function(req, res) { //msg is a parameter  // ? is to make the msg optional
    res.send(msgs)
})

export default router