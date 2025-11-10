import { Request, Response } from "express";
import States from "../models/States";

class DistrictsController {
    public async create(req: Request, res: Response){
        const { city, name } = req.body
        try {
            const response = await States.updateOne(
                { "cities._id": city},
                {
                    $push: {
                        "cities.$.districts": { name }
                    }
                },
                { runValidators: true }
            )
            if(response && response.modifiedCount > 0){
                return res.json({ message: "Bairro adicionado com sucesso"})
            }else{
                return res.json({ message: "Não foi possivel adicionar o bairro"})
            }
        } catch (error: any) {
            if(error && error.errors["cities.$.districts.name"]){
                return res.json({
                    message: error.errors["cities.$.districts.name"].message
                })
            }
        }
    }
    // Get
    public async list(req: Request, res: Response){
        const { city } = req.body
        try {
            const listDistricts = await States.find({
                "cities._id": city,
            }).select("cities._id cities.name cities.districts")
            return res.json(listDistricts)
        } catch (error: any) {
            return res.json({ message: error.message })
        }
    }

    // Delete
    public async delete(req: Request, res: Response){
        const { city, district } = req.body
        try {
            const response = await States.updateOne(
                { "cities._id": city },
                {
                    $pull: {
                        "cities.$.districts": { _id: district }
                    }
                }
            )
            if(response && response.modifiedCount > 0){
                return res.json({ message: "Registro excluido com sucesso" })
            }else{
                return res.json({ message: "Registro inexistente"})
            }
        } catch (error: any) {
            return res.json({ message: error.message })
        }
    }

    public async put(req: Request, res: Response){
        const { city, district, name } = req.body
        try {
            const response = await States.updateOne(
                { "cities._id": city, "cities.districts._id": district },
                {
                    $set: {
                        "cities.$[city].districts.$[district].name": name,
                    }
                },
                {
                    arrayFilters: [
                        { "city._id": city},
                        { "district._id": district}
                    ],
                    runValidators: true
                }
            )  
            if(response && response.modifiedCount > 0){
                return res.json({ message: "Registro atualizado com sucesso" })
            }else if(response && response.modifiedCount == 0){
                return res.json({ message: "Registro não localizado" })
            }else{
                return res.json({ message: "Não foi possivel atualizar o registro" })
            }
        } catch (error: any) {
            return res.json({ message: error.message})
        }
    }
}

export default new DistrictsController()