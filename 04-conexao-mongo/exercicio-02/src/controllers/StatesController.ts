import { Request, Response} from "express"
import States from "../models/States";

class StateController {
    public async create(req: Request, res: Response){
        const { name } = req.body
        try {
            const newState = new States({ name })
            const response = await newState.save()
            return res.status(201).json(response)
        } catch (error: any) {
            if(error.code === 11000 || error.code === 11001){
                return res.json({ message: "O state não pode ser duplicado" })
            }else{
                return res.json({ message: error.message })
            }
        }
    }

    public async list(req: Request, res: Response){
        try {
            const listState = await States.find()
            return res.json(listState)
        } catch (error: any) {
            return res.json({ message: error.message})
        }
    }

    public async put(req: Request, res: Response){
        const { id } = req.params
        const { name } = req.body
        try {
            const updateState = await States.findByIdAndUpdate(id, { name })
            return res.json(updateState)
        } catch (error: any) {
            return res.json({ message: error.message })
        }
    }

    public async delete(req: Request, res: Response){
        const { id } = req.params
        try {
            const deleteState = await States.findByIdAndDelete(id)
            return res.json(deleteState)
        } catch (error: any) {
            return res.json({ message: error.message })
        }
    }
}

export default new StateController()