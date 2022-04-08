const { send } = require("express/lib/response")

class Msg {
    constructor(text, senderId, reciverId) {
        this.text = text
        this.senderId = senderId
        this.reciverId = reciverId
        this.id = "Msg" + Date.now()
        this.date = Date.now()
        this.isSeen = false
        this.isEdited = false
    }

    editMsg(newMsg) {
        if (this.isSeen) return { err: true, msg: "already Seen" }
        this.isEdited = true
        this.text = newMsg
        return this
    }
}

export default Msg