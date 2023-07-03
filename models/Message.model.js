const {Schema, model} = require("mongoose")

const messageSchema = new Schema({
  message: {
    type: String
  },
  author: {
    type: Schema.Types.ObjectId, ref: "User" 
  }
},
  {timestamps: true}
)

module.exports = model("Message", messageSchema)

// // Llamar a un elemento 
// {type: Schema.Types.ObjectId, ref: "Review"}
// // Crear un array de elementos 
// [{type: Schema.Types.ObjectId, ref: "Review"}],