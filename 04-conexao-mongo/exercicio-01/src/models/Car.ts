import mongoose, { Schema } from "mongoose";

const CarSchema = new Schema({
	model: {
		type: String,
		maxlength: [15, "O modelo pode ter no máximo 15 caracteres"],
		unique: true,
		required: [true, "O modelo é obrigatório"],
	},
});

export default mongoose.model("Car", CarSchema);
