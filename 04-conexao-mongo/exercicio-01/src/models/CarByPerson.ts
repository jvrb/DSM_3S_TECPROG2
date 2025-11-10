import mongoose, { Schema } from "mongoose";
import Person from "./Person";
import Car from "./Car";

const CarByPerson = new Schema({
    person: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Person",
        required: [true, "A pessoa é obrigatória"],
        validate: {
            validator: async function (id:string) {
                const person = await Person.findById(id)
                return !!person
            },
            message: "A pessoa fornecida não existe"
        }
    },
    car: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Car",
        required: [true, "O carro é obrigatório"],
        validate: {
            validator: async function (id: string){
                const car = await Car.findById(id)
                return !!car
            },
            message: "O carro fornecido não existe"
        }
    }
})

export default mongoose.model("CarByPerson", CarByPerson)