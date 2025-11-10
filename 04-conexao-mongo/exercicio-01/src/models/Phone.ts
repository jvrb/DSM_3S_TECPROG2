import mongoose, { model, mongo, Schema } from "mongoose";
import Person from "./Person";

const PhoneSchema = new Schema({
	person: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Person",
		required: [true, "A pessoa dona do telefone é obrigatória"],
		validate: {
			validator: async function (id: string) {
				const person = await Person.findById(id);
				return !!person;
			},
			message: "A pessoa fornecida não existe",
		},
	},
	number: {
		type: String,
		match: [/^[0-9]{11}$/, "O telefone deve ter exatamente 11 digitos"],
		required: [true, "O número é obrigatório"],
	},
});

export default mongoose.model("Phone", PhoneSchema);
