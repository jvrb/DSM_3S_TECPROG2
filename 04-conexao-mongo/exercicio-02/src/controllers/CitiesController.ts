import { Response, Request } from "express";
import States from "../models/States";

class CitiesController {
    public async create(req: Request, res: Response){
        const { state: _id, name } = req.body
        try {
            const response = await States.updateOne(
                { _id },
                {
                    $push: {
                        cities: { name }
                    }
                },
                { runValidators: true }
            )
            console.log("response", response)
            if(response && response.modifiedCount > 0){
                return res.json({ message: "Cidade adicionada com sucesso" })
            }else{
                return res.json({ message: "Não foi possivel adicionar a cidade" })
            }
        } catch (error: any) {
            if(error && error.errors["cities.name"]){
                return res.json({
                    message: error.erros["cities.name"].message
                })
            }
            return res.json({ message: error })
        }
    }

    public async list(req: Request, res: Response){
        const { state: _id } = req.body
        try {
            const listCities = await States.find({ _id }).select("cities._id cities.name")
            return res.json(listCities)
        } catch (error: any) {
            return res.json({ message: error.message })
        }
    }

    public async delete(req: Request, res: Response){
        const { state, city } = req.body
        try {
            const response = await States.updateOne(
                { _id: state },
                {
                    $pull: {
                        cities: { _id: city }
                    }
                }
            )
            if(response && response.modifiedCount > 0){
                return res.json({ message: "Regitro excluido com sucesso!" })
            }else{
                return res.json({ message: "Registro inexistente" })
            }
        } catch (error: any) {
            return res.json({ message: error.message })
        }
    }

    public async update(req: Request, res: Response){
        const { city, name } = req.body
        try {
            const response = await States.updateOne(
                { "cities._id": city},
                {
                    $set: {
                        "cities.$.name": name
                    }
                },
                { runValidators: true }
            )
            if(response && response.modifiedCount > 0){
                return res.json({ message: "Registro atualizado com sucesso" })
            }else{
                return res.json({ message: "Não foi possivel atualizar o registro" })
            }
        } catch (error: any) {
            if(error && error.errors["cities.0.name"]){
                return res.json({
                    message: error.errors["cities.0.name"].message
                })
            }
        }
    }
}

export default new CitiesController()