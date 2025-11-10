import mongoose, { Schema } from "mongoose";

const PersonSchema = new Schema({
    name: {
        type: String,
        maxlenght: [30, "O nome deve ter no máximo 30 caracteres"],
        required: [true, "O nome é obrigatório"]
    }
})

export default mongoose.model("Person", PersonSchema)