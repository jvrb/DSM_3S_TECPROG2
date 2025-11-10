import { Request, Response } from "express";
import CarByPerson from "../models/CarByPerson";

class CarByPersonController {
    public async create(req: Request, res: Response){
        const { person, car } = req.body
        try {
            const newPerson = new CarByPerson({ person, car })
            const response = await newPerson.save()
            return res.status(201).json(response)
        } catch (error) {
            return res.json({ message: error })
        }
    }

    public async list(req: Request, res: Response){
        try {
            const listCarByPerson = await CarByPerson.find()
            return res.json(listCarByPerson)
        } catch (error) {
            return res.json({ message: error })
        }
    }

    public async put(req: Request, res: Response){
        const { id } = req.params
        const { person, car } = req.body
        try {
            const updateObject = await CarByPerson.findByIdAndUpdate(id, { person, car})
            return res.json({ message: "Dados atualizado com sucesso!" })
        } catch (error) {
            return res.json({ message: error })
        }
    }

    public async delete(req: Request, res: Response){
        const { id } = req.params
        try {
            const deleteObject = await CarByPerson.findByIdAndDelete(id)
            return res.json({ message: "Dado deletado com sucesso!" })
        } catch (error) {
            return res.json({ message: error })
        }
    }
}

export default new CarByPersonController()