import mongoose from "mongoose";
import { Schema } from "mongoose";

export const DistrictSchema: Schema = new Schema({
    name: {
        type: String,
        maxlength: [30, "O nome pode ter no máximo 30 caracteres"],
        required: [true, "O nome é obrigatório"]
    }
})

export default mongoose.model("District", DistrictSchema)