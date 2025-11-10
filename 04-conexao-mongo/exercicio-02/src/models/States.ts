import mongoose from "mongoose"
import { Schema } from "mongoose"
import {CitySchema} from "./Cites"

const StateSchema: Schema = new Schema({
    name: {
        type: String,
        maxlength: [20, "O nome pode ter no máximo 20 caracteres"],
        unique: [true, "Esse valor já existe"],
        required: [true, "O nome é obrigatório"]
    },
    cities: [CitySchema]
})

export default mongoose.model("State", StateSchema)