import mongoose from "mongoose";
import { Schema } from "mongoose";
import { DistrictSchema }  from "./Districts";

export const CitySchema: Schema = new Schema({
    name: {
        type: String,
        maxlength: [30, "O nome pode ter no máximo 30 caracteres"],
        required: [true, "O nome é obrigatório"]
    },
    districts: [DistrictSchema]
})

export default mongoose.model("City", CitySchema)