const {Schema, model} = require("mongoose")

const chatSchema = new Schema(
  {
    chat:[{type: Schema.Types.ObjectId, ref: "Message"}],
    
    users: [{type: Schema.Types.ObjectId, ref: "User"}]
  },
  {timestamps: true}
)

module.exports = model("Chat", chatSchema)