import { Request, Response } from "express";
import Car from "../models/Car";

class CarController {
	public async create(req: Request, res: Response) {
		const { model } = req.body;
		try {
			const document = new Car({ model });
			const resp = await document.save();
			return res.json(resp);
		} catch (e: any) {
			if (e.code === 11000 || e.code === 11001) {
				return res.json({ message: "Este modelo já está em uso" });
			} else if (e && e.errors["model"]) {
				return res.json({ message: e.errors["model"].message });
			}
			return res.json({ message: e.message });
		}
	}

	public async list(req: Request, res: Response) {
		try {
			const objects = await Car.find().sort({ model: "asc" });
			return res.json(objects);
		} catch (e: any) {
			return res.json({ message: e.message });
		}
	}

	public async put(req: Request, res: Response) {
		const { id } = req.params;
		const { model } = req.body;
		try {
			const carUpdate = await Car.findByIdAndUpdate(id, { model });
			return res.json({ message: `Carro atualizado para ${model}` });
		} catch (error) {
			return res.json({ message: error });
		}
	}

	public async delete(req: Request, res: Response) {
		const { id } = req.params;
		try {
			const carDelete = await Car.findByIdAndDelete(id);
			return res.json({ message: "Carro deletado com sucesso!" });
		} catch (error) {
			return res.json({ message: error });
		}
	}
}

export default new CarController();
